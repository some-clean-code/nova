import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
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
  const location = useLocation()
  const activeIndex = links.findIndex((link) => location.pathname.startsWith(link.to))
  const [pillIndex, setPillIndex] = useState(() => (activeIndex >= 0 ? activeIndex : 0))
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isQuickClosing, setIsQuickClosing] = useState(false)
  const quickCloseTimerRef = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (quickCloseTimerRef.current) {
        window.clearTimeout(quickCloseTimerRef.current)
      }
    }
  }, [])

  return (
    <>
      <header
        className={[
          'site-header',
          isScrolled ? 'site-header-scrolled' : '',
          isMenuOpen ? 'site-header-menu-open' : '',
        ].join(' ').trim()}
      >
        <div className="container nav-shell">
          <NavLink
            to="/"
            className="brand"
            end
            onClick={() => setIsMenuOpen(false)}
          >
            {env.appName}
          </NavLink>
          <button
            type="button"
            className={isMenuOpen ? 'menu-toggle active' : 'menu-toggle'}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="menu-bar" data-position="top" />
            <span className="menu-bar" data-position="bottom" />
          </button>
          <nav
            className={[
              'nav-links',
              activeIndex >= 0 ? 'nav-links-active' : '',
              isMenuOpen ? 'nav-links-open' : '',
              isQuickClosing ? 'nav-links-quick-close' : '',
            ].join(' ').trim()}
            aria-label="Main navigation"
            style={{ '--active-index': pillIndex } as CSSProperties}
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => {
                  setPillIndex(links.findIndex((item) => item.to === link.to))
                  setIsQuickClosing(true)
                  setIsMenuOpen(false)
                  if (quickCloseTimerRef.current) {
                    window.clearTimeout(quickCloseTimerRef.current)
                  }
                  quickCloseTimerRef.current = window.setTimeout(() => {
                    setIsQuickClosing(false)
                    quickCloseTimerRef.current = null
                  }, 500)
                }}
                className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <button
        type="button"
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        className={isMenuOpen ? 'mobile-menu-backdrop mobile-menu-backdrop-open' : 'mobile-menu-backdrop'}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  )
}
