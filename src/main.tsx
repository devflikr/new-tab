import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { PopupProvider } from './context/Popup'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PopupProvider>
            <App />
        </PopupProvider>
    </React.StrictMode>,
)
