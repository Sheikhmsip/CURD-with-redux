import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
// Create a new router instance
const router = createRouter({ routeTree })

// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
