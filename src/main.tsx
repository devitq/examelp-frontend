import React from 'react';
import ReactDOM from 'react-dom/client';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

import App from './App';
import './styles/globals.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
