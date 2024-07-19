import { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const Menu = () => {
    
    const [submenu, setSubmenu] = useState<{ [key: string]: boolean }>({
        avaliacaoAtual: false,
        organizacoes: false,
        relatorios: false,
        recursosCIS: false,
        ajuda: false
    });

    const toggleSubmenu = (key: string) => {
        setSubmenu(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const getRotationStyle = (isOpen: boolean) => ({
        transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'
    });

    return (
        <section className="menu">
            <nav>
                <Link to="/" onClick={scrollToTop}><i className="fa-solid fa-house"></i>Dashboard</Link>
                <div onClick={() => toggleSubmenu('avaliacaoAtual')}>
                    <span>
                        <i className="fa-solid fa-list-check"></i>Avaliação Atual
                        <i
                            className="fa-solid fa-sort-down"
                            style={getRotationStyle(submenu.avaliacaoAtual)}
                        ></i>
                    </span>
                    {submenu.avaliacaoAtual && (
                        <div className="submenu">
                            <Link to="/subpage1" onClick={scrollToTop}>Todos os controles</Link>
                            <Link to="/subpage2" onClick={scrollToTop}>Tarefas atribuídas</Link>
                            <Link to="/subpage2" onClick={scrollToTop}>Pendente para avaliação</Link>
                            <Link to="/subpage2" onClick={scrollToTop}>Calendário</Link>
                        </div>
                    )}
                </div>
                <Link to="/historico-de-avaliacao" onClick={scrollToTop}><i className="fa-solid fa-clock-rotate-left"></i>Histórico de Avaliação</Link>
                <div onClick={() => toggleSubmenu('organizacoes')}>
                    <span>
                        <i className="fa-solid fa-building-columns"></i>Organizações
                        <i
                            className="fa-solid fa-sort-down"
                            style={getRotationStyle(submenu.organizacoes)}
                        ></i>
                    </span>
                    {submenu.organizacoes && (
                        <div className="submenu">
                            <Link to="/subpage3" onClick={scrollToTop}>PRODEPA (Primário)</Link>
                        </div>
                    )}
                </div>
                <Link to="/administracao" onClick={scrollToTop}><i className="fa-solid fa-sitemap"></i>Administração</Link>
                <div onClick={() => toggleSubmenu('relatorios')}>
                    <span>
                        <i className="fa-solid fa-download"></i>Relatórios
                        <i
                            className="fa-solid fa-sort-down"
                            style={getRotationStyle(submenu.relatorios)}
                        ></i>
                    </span>
                    {submenu.relatorios && (
                        <div className="submenu">
                            <Link to="/subpage5" onClick={scrollToTop}>Slides de nível de quadro</Link>
                            <Link to="/subpage6" onClick={scrollToTop}>Relatório de Resumo de Controle</Link>
                            <Link to="/subpage6" onClick={scrollToTop}>Relatório de status de controle (PDF)</Link>
                        </div>
                    )}
                </div>
                <div onClick={() => toggleSubmenu('recursosCIS')}>
                    <span>
                        <i className="fa-solid fa-link"></i>Recurso do CIS
                        <i
                            className="fa-solid fa-sort-down"
                            style={getRotationStyle(submenu.recursosCIS)}
                        ></i>
                    </span>
                    {submenu.recursosCIS && (
                        <div className="submenu">
                            <Link to="/subpage7" onClick={scrollToTop}>CIS-CAT</Link>
                            <Link to="/subpage8" onClick={scrollToTop}>Renferências CIS</Link>
                            <Link to="/subpage8" onClick={scrollToTop}>Controle CIS</Link>
                            <Link to="/subpage8" onClick={scrollToTop}>Comunidade CIS</Link>
                            <Link to="/subpage8" onClick={scrollToTop}>Ferramenta de análise de impacto comercial do CIS CSAT</Link>
                            <Link to="/subpage8" onClick={scrollToTop}>Ransomware</Link>
                        </div>
                    )}
                </div>
                <div onClick={() => toggleSubmenu('ajuda')}>
                    <span>
                        <i className="fa-solid fa-at"></i>Ajuda CSAT
                        <i
                            className="fa-solid fa-sort-down"
                            style={getRotationStyle(submenu.ajuda)}
                        ></i>
                    </span>
                    {submenu.ajuda && (
                        <div className="submenu">
                            <Link to="/subpage9" onClick={scrollToTop}>Suporte técnico do produto CIS</Link>
                            <Link to="/subpage10" onClick={scrollToTop}>Artigos da Base de Conhencimento CSAT</Link>
                        </div>
                    )}
                </div>
            </nav>
        </section>
    );
};

export { Menu };
