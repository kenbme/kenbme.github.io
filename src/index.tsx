import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App github_username="kenbme" linkedin_username="kenned-barbosa-1b148a244" />
  </React.StrictMode>
);
