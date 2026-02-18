import { z } from 'zod'

const EnvSchema = z.object({
  VITE_APP_NAME: z.string().trim().min(1).default('NERO'),
  VITE_API_BASE_URL: z.string().trim().url().optional(),
})

const parsedEnv = EnvSchema.safeParse(import.meta.env)

if (!parsedEnv.success) {
  const issues = parsedEnv.error.issues
    .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
    .join('; ')
  throw new Error(`Invalid environment variables: ${issues}`)
}

export const env = {
  appName: parsedEnv.data.VITE_APP_NAME,
  apiBaseUrl: parsedEnv.data.VITE_API_BASE_URL ?? window.location.origin,
}
