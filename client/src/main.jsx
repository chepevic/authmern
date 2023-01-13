import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { UserProvider } from './context/UserContext'
// import { UserProvider } from './context/UserContext'
import "./styles/styles.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserProvider>
 
  </React.StrictMode>
)
