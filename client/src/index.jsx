import React from 'react';
import ReactDOM from 'react-dom/client'; 
import MainRoutes from './routes/MainRoutes';
import './styles.css'; 

document.title = 'TodoList';
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>
);