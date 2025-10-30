import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import FlagApp from "./FlagApp.tsx"
import NotFound from "./NotFound.tsx"

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path:"/flagapp/:id", element : <FlagApp />},
  {path:"*", element: <NotFound />}
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
