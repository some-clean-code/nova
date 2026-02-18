import { env } from '../app/env.ts'

export class HttpError extends Error {
  status: number
  body: unknown

  constructor(status: number, body: unknown) {
    super(`HTTP ${status}`)
    this.name = 'HttpError'
    this.status = status
    this.body = body
  }
}

type Json = Record<string, unknown> | unknown[]

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: Json | FormData
}

function buildUrl(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return new URL(path, env.apiBaseUrl).toString()
}

function buildHeaders(body: RequestOptions['body'], headers?: HeadersInit) {
  const merged = new Headers(headers)

  if (!merged.has('Accept')) {
    merged.set('Accept', 'application/json')
  }

  if (body && !(body instanceof FormData) && !merged.has('Content-Type')) {
    merged.set('Content-Type', 'application/json')
  }

  return merged
}

async function parseResponse(response: Response) {
  const contentType = response.headers.get('content-type') ?? ''

  if (contentType.includes('application/json')) {
    return response.json()
  }

  return response.text()
}

export async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { body, headers, ...rest } = options
  const response = await fetch(buildUrl(path), {
    ...rest,
    headers: buildHeaders(body, headers),
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
  })

  const parsed = await parseResponse(response)

  if (!response.ok) {
    throw new HttpError(response.status, parsed)
  }

  return parsed as T
}

export const http = {
  get: <T>(path: string, options?: RequestOptions) => request<T>(path, { ...options, method: 'GET' }),
  post: <T>(path: string, body?: RequestOptions['body'], options?: RequestOptions) =>
    request<T>(path, { ...options, method: 'POST', body }),
}
