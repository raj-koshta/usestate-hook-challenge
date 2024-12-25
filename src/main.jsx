import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import UseStateHook from './UseStateHook'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseStateHook />
  </StrictMode>,
)
