import { NavLink } from 'react-router-dom'
import { env } from '../app/env.ts'

type NavItem = {
  to: string
  label: string
}

const links: NavItem[] = [
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <NavLink to="/" className="brand" end>
          {env.appName}
        </NavLink>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
