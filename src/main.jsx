// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/stylesheet.css'
import '../src/assets/scss/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<App />
</BrowserRouter>
) 
