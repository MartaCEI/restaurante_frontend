import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/css/restaurante.css'
import '@/css/tables.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/libs/routes/routes'
import { UserProvider } from '@/hooks/useUser'
import { MenuProvider } from './hooks/useMenu'
import { AdminProvider } from './hooks/useAdmin'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <AdminProvider>
        <MenuProvider>
          <RouterProvider router={router} />
        </MenuProvider>
      </AdminProvider>
    </UserProvider>
  </StrictMode>,
)
