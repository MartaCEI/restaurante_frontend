import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/css/restaurante.css'
import '@/css/tables.css'
import '@/css/cabeceras.css'
import "@/css/headers.css"
// import '@/css/menu.css'
import '@/css/css.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/libs/routes/routes'
import { UserProvider } from '@/hooks/useUser'
import { MenuProvider } from './hooks/useMenu'
import { AdminProvider } from './hooks/useAdmin'
import { OrderProvider } from './hooks/useOrders'
import { CarritoProvider } from './hooks/useCarrito'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <AdminProvider>
        <MenuProvider>
          <OrderProvider>
            <CarritoProvider>
              <RouterProvider router={router} />
            </CarritoProvider>
          </OrderProvider>
        </MenuProvider>
      </AdminProvider>
    </UserProvider>
  </StrictMode>,
)
