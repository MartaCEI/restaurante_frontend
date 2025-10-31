import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/css/css.css'
import '@/css/newform.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/libs/routes/routes'
import { UserProvider } from '@/hooks/useUser'
import { MenuProvider } from './hooks/useMenu'
import { AdminProvider } from './hooks/useAdmin'
import { OrderProvider } from './hooks/useOrders'
import { CarritoProvider } from './hooks/useCarrito'
import { EventProvider } from './hooks/useEvents'
import { PageInfoProvider } from './hooks/usePageInfo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <AdminProvider>
        <MenuProvider>
          <OrderProvider>
            <CarritoProvider>
              <EventProvider>
                <PageInfoProvider>
                  <RouterProvider router={router} />
                </PageInfoProvider>
              </EventProvider>
            </CarritoProvider>
          </OrderProvider>
        </MenuProvider>
      </AdminProvider>
    </UserProvider>
  </StrictMode>,
)
