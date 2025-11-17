import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../components/App';
import AboutPage from '../components/AboutPage';
import Home from '../components/Home'
export default function MainRoutes() {
  return (
    <Router>
      <Routes> {/* Envolver os componentes Route em um componente Routes */}
      <Route path="/" exact element={<Home />} /> {/* Usar a prop "element" para especificar o componente */}
        <Route path="/App" exact element={<App />} /> {/* Usar a prop "element" para especificar o componente */}
        <Route path="/about" element={<AboutPage />} /> {/* Usar a prop "element" para especificar o componente */}
        
      </Routes>
    </Router>
  );
}