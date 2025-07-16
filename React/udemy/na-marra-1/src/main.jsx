import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import NavBar from './components/NavBar'
import Intro from './components/Intro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Intro />
  </StrictMode>,
)