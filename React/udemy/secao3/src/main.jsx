import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ManageData from './components/ManageData.jsx'
import ListRender from './components/ListRender.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ManageData />
    <ListRender />
  </StrictMode>,
)
