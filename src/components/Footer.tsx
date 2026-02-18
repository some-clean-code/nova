import { env } from '../app/env.ts'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p>Built for fast product launches.</p>
        <small>© 2026 {env.appName}</small>
      </div>
    </footer>
  )
}
