import { Outlet } from 'react-router-dom'
import { Footer } from './Footer.tsx'
import { Navbar } from './Navbar.tsx'

export default function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
