import { Link } from 'react-router-dom';
import './aboutPageStyles.css';

const AboutPage = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">Sobre nós</h1>
            <p className="about-content">
                Essa aplicação foi criada com o objetivo de ser uma lista de tarefas onde você consegue adicionar, excluir e marcar como concluída uma tarefa, com proposta da cadeira de devops.
            </p>
            <h2 className="about-subtitle">Equipe</h2>
            <ul className="about-team">
                <li>Davi Siqueira </li>
                <li>Pedro Henrique Baade </li>
                <li>Ricardo George Albuquerque </li>
                <li>Tiffany Gomes de Almeida </li>
                <li>Gabriel Torres </li>
                <li>Ylgner Leite Cavalcanti </li>
            </ul>
            <div className="about-github">
                <p>Link do repositório no GitHub:</p>
                <a href="https://github.com/bennever/TodoFaculdade">GitHub</a>
            </div>
            <Link to="/" className="back-link">Voltar para a pagina inicial</Link>
        </div>
    );
};

export default AboutPage
