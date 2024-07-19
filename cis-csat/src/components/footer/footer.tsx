import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="dev">
                    <div className="conteudo">
                        <h3>CIS CSAT</h3>
                        <p>Projetado e desenvolvido por <Link target="_blank" to="https://github.com/EduardoRibeiroIX">Eduardo Ribeiro</Link></p>
                    </div>
                </div>
                <div className="link">
                    <div className="conteudo">
                        <Link to="/">Política de Privacidade</Link>
                        <p>|</p>
                        <Link to="/">Termos de Uso</Link>
                    </div>
                </div>
                <div className="logo">
                    <div className="conteudo">
                        <p>Center for Internet Security</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };