// index.js or main.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);