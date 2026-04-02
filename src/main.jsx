import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import App from './App.jsx'

console.log("Main.jsx: Initializing React root...");

const container = document.getElementById('root');
if (container) {
  console.log("Main.jsx: Root container found, rendering App...");
  const root = createRoot(container);
  root.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
} else {
  console.error("Main.jsx: Root element not found");
}
