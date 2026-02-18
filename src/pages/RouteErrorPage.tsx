import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export function RouteErrorPage() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <section className="stack" role="alert" aria-live="assertive">
        <span className="eyebrow">Error</span>
        <h1>{error.status} {error.statusText}</h1>
        <p>{typeof error.data === 'string' ? error.data : 'Please try again.'}</p>
      </section>
    )
  }

  return (
    <section className="stack" role="alert" aria-live="assertive">
      <span className="eyebrow">Error</span>
      <h1>Something went wrong.</h1>
      <p>Refresh the page or return home.</p>
    </section>
  )
}
