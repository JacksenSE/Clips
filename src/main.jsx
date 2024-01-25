import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client" instead of "react-dom"
import App from './App.jsx';
import { UserProvider } from './components/UserContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
);

