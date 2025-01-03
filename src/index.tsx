import './index.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import App from './App.tsx'
import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route 
} from 'react-router-dom'
import ProductContainer from './components/ProductContainer.tsx'
import Cart from './components/Cart.tsx'
import Index from './components/Index.tsx'
import ErrorPage from './ErrorPage.tsx'
import ProductDetails from './components/ProductDetails.tsx'
import Form from './components/Form.tsx';

const store = setupStore();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App/>}
      errorElement={<ErrorPage />}
    > 
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route 
          path='cart'
          element={<Cart />}
        />
        <Route
          path='shop'
          element={<ProductContainer />}
        />
        <Route
          path='shop/:productId'
          element={<ProductDetails />}
        />
        <Route
          path='form'
          element={<Form />}
        />
      </Route>
    </Route>
  )
)



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MantineProvider>
  </StrictMode>,
)
