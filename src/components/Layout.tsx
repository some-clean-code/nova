import type { JSX } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <div className="layout-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <main>
        {/* React Router will inject Home or About here */}
        <Outlet />
      </main>

      <footer>© 2026 Professional Setup</footer>
    </div>
  );
}