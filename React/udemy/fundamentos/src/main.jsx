import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrimeiroComponente from './components/PrimeiroComponente.jsx'
import TemplateExpressions from './components/TemplateExpressoes.jsx'
import Events from './components/events.jsx'
import Desafio from './components/Desafio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PrimeiroComponente />
    <TemplateExpressions />
    <Desafio />
    <Events />
  </StrictMode>,
)
