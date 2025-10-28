import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/css/restaurante.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/libs/routes/routes'
import { UserProvider } from '@/hooks/useUser'
import { MenuProvider } from './hooks/useMenu'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <MenuProvider>
        <RouterProvider router={router} />
      </MenuProvider>
    </UserProvider>
  </StrictMode>,
)
