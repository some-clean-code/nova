import { NavLink } from 'react-router-dom'
import { env } from '../app/env.ts'
import { cn } from '../lib/cn.ts'

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
              className={({ isActive }) => cn('nav-link', isActive && 'nav-link-active')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
