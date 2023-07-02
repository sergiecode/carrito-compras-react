import React from 'react'
import ReactDOM from 'react-dom/client'
import { CaritoApp } from './CaritoApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CaritoApp />
    </React.StrictMode>,
  </BrowserRouter>
)
