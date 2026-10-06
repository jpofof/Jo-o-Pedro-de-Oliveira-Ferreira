import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sobre_Mim from './componentes/Sobre_Mim'
import Quem_sou_eu from './componentes/Quem_sou_eu'
import Projetos from './componentes/Projetos'

function SobrePage() {
  return(
    <div>
        <Sobre_Mim />
        <Quem_sou_eu />
        <Projetos />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SobrePage />
  </StrictMode>,
)