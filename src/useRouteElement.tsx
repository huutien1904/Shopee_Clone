import { useRoutes } from 'react-router-dom'
import ProductList from './pages/Register/ProductList'
import Login from './pages/Register/Login'
import Register from './pages/Register'
import Registerlayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'
export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <Registerlayout>
          <Login />
        </Registerlayout>
      )
    },
    {
      path: '/register',
      element: (
        <Registerlayout>
          <Register />
        </Registerlayout>
      )
    }
  ])
  return routeElements
}
