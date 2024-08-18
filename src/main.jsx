import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import LoginPage from './Pages/login'
import RegisterPage from './Pages/register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Pages/errorpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>this is Router Provider</div>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/Login",
    element: <div>
      <LoginPage></LoginPage>
    </div>
  },
  {
    path: "/register",
    element: <div>
      <RegisterPage />
    </div>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
