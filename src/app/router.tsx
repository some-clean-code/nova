import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout.tsx'
import { ContactPage } from '../pages/ContactPage.tsx'
import { HomePage } from '../pages/HomePage.tsx'
import { ProductsPage } from '../pages/ProductsPage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])
