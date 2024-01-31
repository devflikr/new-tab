import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PopupProvider } from './context/Popup'

import './index.css'
import 'flikrui/dist/class-styled.css'

import { tippy } from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

tippy.setDefaultProps({
    arrow: false,
    animation: "shift-away",
    delay: [200, 0],
    // theme: 'tippy-theme',
    touch: "hold",
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PopupProvider>
            <App />
        </PopupProvider>
    </React.StrictMode>,
)
