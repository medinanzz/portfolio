import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { GlboalStyle } from './style/resetStyle'
import { RouteApp } from './routes'
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <RouteApp />
      <GlboalStyle />
    </HashRouter>
  </StrictMode>,
)
