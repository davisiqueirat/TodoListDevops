import React from 'react';
import { Link } from 'react-router-dom';
import './HomeStyles.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Bem-vindo à Página Inicial</h1>
        <p className="subtitle">Esta é a página inicial do nosso aplicativo.</p>
      </header>

      <nav className="navigation">
        <ul className="nav-links">
          <li className="nav-item"><Link to="/about" className="nav-link">Sobre</Link></li>
          <li className="nav-item"><Link to="/app" className="nav-link">Lista de Tarefas</Link></li>
        </ul>
      </nav>

      <footer className="footer">
        <p className="footer-text"> &copy; 2025</p>
      </footer>
    </div>
  );
}

export default Home;