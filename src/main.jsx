import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add font family to body
document.body.style.fontFamily = "'Inter', sans-serif";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 