import { StrictMode } from 'react'
import { Provider } from "../src/components/ui/provider"
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRoute from './routes/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <AppRoute />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
