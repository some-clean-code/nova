import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="stack">
      <span className="eyebrow">404</span>
      <h1>Page not found.</h1>
      <p>The route you requested does not exist in this starter.</p>
      <Link className="cta" to="/">
        Back to home
      </Link>
    </section>
  )
}
