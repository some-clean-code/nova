import { env } from '../app/env.ts'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p>Built for fast product launches.</p>
        <div className="footer-meta">
          <a
            className="instagram-link"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg className="instagram-icon" viewBox="0 0 24 24" aria-hidden>
              <defs>
                <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f58529" />
                  <stop offset="35%" stopColor="#feda77" />
                  <stop offset="65%" stopColor="#dd2a7b" />
                  <stop offset="100%" stopColor="#8134af" />
                </linearGradient>
              </defs>
              <path
                className="instagram-icon-path"
                d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.6 1.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"
              />
            </svg>
          </a>
          <small>© 2026 {env.appName}</small>
        </div>
      </div>
    </footer>
  )
}
