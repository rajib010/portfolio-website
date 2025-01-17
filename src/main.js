import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
createRoot(document.getElementById('root')).render(React.createElement(React.StrictMode, null,
    React.createElement(BrowserRouter, null,
        React.createElement(App, null),
        React.createElement(Toaster, null))));
