import { useState } from 'react';
import { Card } from '../../components/cards/card/card';
import { Footer } from '../../components/footer/footer';
import { Menu } from '../../components/menu/menu';
import { RadarGraph } from '../../components/radarGraph/radarGraph';
import './cei03.css';
import ToggleButton from '../../components/toggleButton/toggleButton';
import { Tag } from '../../components/tag/tag';
import { Formulario } from '../../components/form/form';
import { BtnSubcontroleCompleto } from '../../components/btn/btnSubcontroleCompleto/btnSubcontroleCompleto';
import { CardText } from '../../components/cards/cardText/cardText';

const CEI03 = () => {
    const items = [
        { key: 'item1', title: '3.1 Estabelecer e manter um processo de gerenciamento de dados', group: 'Grupo 1', submenuContent: 'Estabeleça e mantenha um processo de gerenciamento de dados. No processo, aborde a sensibilidade dos dados, o proprietário dos dados, o manuseio dos dados, os limites de retenção de dados e os requisitos de descarte, com base nos padrões de sensibilidade e retenção da empresa. Revise e atualize a documentação anualmente ou quando ocorrerem mudanças significativas na empresa que possam impactar esta salvaguarda.' },
        { key: 'item2', title: '3.2 Estabelecer e manter um inventário de dados', group: 'Grupo 1', submenuContent: 'Estabeleça e mantenha um inventário de dados, com base no processo de gerenciamento de dados da empresa. Faça o inventário de dados sensíveis, no mínimo. Revise e atualize o inventário anualmente, no mínimo, com prioridade para dados sensíveis.'},
        { key: 'item3', title: '3.3 Configurar listas de controle de acesso a dados', group: 'Grupo 1', submenuContent: 'Configure listas de controle de acesso a dados com base na necessidade de conhecimento do usuário. Aplique listas de controle de acesso a dados, também conhecidas como permissões de acesso, a sistemas de arquivos locais e remotos, bancos de dados e aplicativos.' },
        { key: 'item4', title: '3.4 Aplicar retenção de dados', group: 'Grupo 1', submenuContent: 'Utilize ferramentas de inventário de software, sempre que possível, em toda a empresa para automatizar a descoberta e a documentação do software instalado.' },
        { key: 'item5', title: '3.5 Descarte de dados com segurança', group: 'Grupo 1', submenuContent: 'Descarte os dados com segurança, conforme descrito no processo de gerenciamento de dados da empresa. Garanta que o processo e o método de descarte sejam proporcionais à sensibilidade dos dados.'},
        { key: 'item6', title: '3.6 Criptografar dados em dispositivos de usuários finais', group: 'Grupo 1', submenuContent: 'Criptografe dados em dispositivos de usuário final contendo dados sensíveis. Exemplos de implementações podem incluir: Windows BitLocker®, Apple FileVault®, Linux® dm-crypt.'},
        { key: 'item7', title: '3.7 Estabelecer e manter um esquema de classificação de dados', group: 'Grupo 2', submenuContent: 'Estabeleça e mantenha um esquema geral de classificação de dados para a empresa. As empresas podem usar rótulos, como “Sensível”, “Confidencial” e “Público”, e classificar seus dados de acordo com esses rótulos. Revise e atualize o esquema de classificação anualmente ou quando ocorrerem mudanças significativas na empresa que possam impactar esta salvaguarda.'},
        { key: 'item8', title: '3.8 Fluxos de dados de documentos', group: 'Grupo 2', submenuContent: 'Documente fluxos de dados. A documentação do fluxo de dados inclui fluxos de dados do provedor de serviços e deve ser baseada no processo de gerenciamento de dados da empresa. Revise e atualize a documentação anualmente ou quando ocorrerem mudanças empresariais significativas que possam impactar esta salvaguarda.' },
        { key: 'item9', title: '3.9 Criptografar dados em mídia removível', group: 'Grupo 2', submenuContent: 'Criptografe dados em mídia removível.' },
        { key: 'item10', title: '3.10 Criptografar dados confidenciais em trânsito', group: 'Grupo 2', submenuContent: 'Criptografe dados sensíveis em trânsito. Exemplos de implementações podem incluir: Transport Layer Security (TLS) e Open Secure Shell (OpenSSH).' },
        { key: 'item11', title: '3.11 Criptografar dados confidenciais em repouso', group: 'Grupo 2', submenuContent: 'Criptografe dados confidenciais em repouso em servidores, aplicativos e bancos de dados que contenham dados confidenciais. A criptografia da camada de armazenamento, também conhecida como criptografia do lado do servidor, atende ao requisito mínimo desta salvaguarda. Métodos de criptografia adicionais podem incluir criptografia da camada de aplicativo, também conhecida como criptografia do lado do cliente, onde o acesso ao(s) dispositivo(s) de armazenamento de dados não permite acesso aos dados de texto simples.' },
        { key: 'item12', title: '3.12 Processamento e armazenamento de dados segmentados com base na sensibilidade', group: 'Grupo 2', submenuContent: 'Segmente o processamento e o armazenamento de dados com base na sensibilidade dos dados. Não processe dados sensíveis em ativos empresariais destinados a dados de menor sensibilidade.'},
        { key: 'item13', title: '3.13 Implantar uma solução de prevenção de perda de dados', group: 'Grupo 3', submenuContent: 'Implemente uma ferramenta automatizada, como uma ferramenta de Prevenção de Perda de Dados (DLP) baseada em host para identificar todos os dados confidenciais armazenados, processados ​​ou transmitidos por meio de ativos corporativos, incluindo aqueles localizados no local ou em um provedor de serviços remoto, e atualizar o inventário de dados confidenciais da empresa.'},
        { key: 'item14', title: '3.14 Acesso a dados confidenciais de log', group: 'Grupo 3', submenuContent: 'Registre o acesso a dados confidenciais, incluindo modificação e descarte.'},
    ];

    const [submenu, setSubmenu] = useState<{ [key: string]: boolean }>({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
        item5: false
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
        <section className="cei03">
            <div className="container">
                <div className="menu">
                    <Menu />
                </div>
                <main className='main'>
                    <div className="cabecalho">
                        <div className="info">
                            <p className='path'><span>PRODEPA</span> - CEI 03</p>
                            <div className="titulo">
                                <h2>Painel CIS C03</h2>
                                <i className="fa-solid fa-circle-info"></i>
                            </div>
                            <h4>Proteção de dados</h4>
                            <p className='desc'>Desenvolver processos e controles técnicos para identificar, classificar, manipular com segurança, reter e descartar dados.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cardsArea">
                            <Card 
                                textoCima='Pontuação média de controle'
                                textoCentro='0'
                                nivel1='b'
                                nivel2='b'
                                nivel3='b'
                                nivel4='b'
                                nivel5='b'
                            />
                            <CardText 
                                textoCima='Pontuação média da industria de controle'
                                textoCentro='26'
                                textoBaixo='Organização utilizadas para média: 17'
                            />
                            <Card 
                                textoCima='Porcentagem concluída'
                                textoCentro='0'
                                nivel1='b'
                                nivel2='b'
                                nivel3='b'
                                nivel4='b'
                                nivel5='b'
                            />
                            <Card 
                                textoCima='Porcentagem validada'
                                textoCentro='0'
                                nivel1='b'
                                nivel2='b'
                                nivel3='b'
                                nivel4='b'
                                nivel5='b'
                            />
                            <Card 
                                textoCima='Pontuação geral'
                                textoCentro='3'
                                nivel1='a'
                                nivel2='b'
                                nivel3='b'
                                nivel4='b'
                                nivel5='b'
                            />
                        </div>
                        <div className="radar">
                            <RadarGraph />
                        </div>
                        <div className="graphAreas">
                            <div className="form">
                                <div className="form-container">
                                    {items.map((item, index) => (
                                        <div className="form-conteudo" key={index}>
                                            <div className="tag">
                                                <div className="info" onClick={() => toggleSubmenu(item.key)}>
                                                    <div className="circle"></div>
                                                    <p>{`${item.title}`}</p>
                                                    <div className="group">
                                                        <span>{item.group}</span>
                                                    </div>
                                                    <i
                                                        className="fa-solid fa-sort-down"
                                                        style={getRotationStyle(submenu[item.key])}
                                                    ></i>
                                                </div>
                                                <div className="btn-form">
                                                    <ToggleButton />
                                                    <p className='aplicavel'>Aplicável</p>
                                                </div>
                                            </div>
                                            {submenu[item.key] && (
                                                <div className="submenu">
                                                    <p>{item.submenuContent}</p>
                                                    <div className="tag-container">
                                                        {item.key === 'item1' && (
                                                            <>
                                                            </>
                                                        )}
                                                        {item.key === 'item2' && (
                                                            <>
                                                                <Tag cod1='NIST CSF' cod2='ID.AM-5' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item3' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='MP-2' cls='b'/>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='AC-3' cls='b'/>
                                                                <Tag cod1='NIST CSF' cod2='RP.AC-4' cls='Y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item4' && (
                                                            <>
                                                                <Tag cod1='NIST CSF' cod2='PR.DS-4' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item5' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='MP-6' cls='b'/>
                                                                <Tag cod1='NIST CSF' cod2='PR.IP-6' cls='y'/>
                                                                <Tag cod1='NIST CSF' cod2='PR.DS-3' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item6' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='RA-2' cls='b'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item7' && (
                                                            <>
                                                            </>
                                                        )}
                                                        {item.key === 'item8' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='MP-7' cls='b'/>
                                                                <Tag cod1='NIST CSF' cod2='ID.AM-6' cls='y'/>
                                                                <Tag cod1='NIST CSF' cod2='DE.AE-1' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item9' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='IA-5(1)' cls='b'/>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='IA-5' cls='b'/>
                                                                <Tag cod1='NIST CSF' cod2='PR.PT-2' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item10' && (
                                                            <>
                                                                <Tag cod1='NIST CSF' cod2='PR.DS-2' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item11' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='IA-5(1)' cls='B'/>
                                                                <Tag cod1='NIST CSF' cod2='PR.DS-1' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item12' && (
                                                            <>
                                                                <Tag cod1='NIST CSF' cod2='PR.AC-5' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item13' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='CA-7' cls='b'/>
                                                                <Tag cod1='NIST CSF' cod2='PR.DS-5' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item14' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='AU-2' cls='b'/>
                                                                <Tag cod1='NIST CSF' cod2='PR.DS-6' cls='y'/>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className="formulario-submenu">
                                                        {item.key === 'item1' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Identificar' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                                <div className="formulario">
                                                                    <BtnSubcontroleCompleto />
                                                                </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item2' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Identificar' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                                <div className="formulario">
                                                                    <BtnSubcontroleCompleto />
                                                                </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item3' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Proteger' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                                <div className="formulario">
                                                                    <BtnSubcontroleCompleto />
                                                                </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item4' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Proteger' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                                <div className="formulario">
                                                                    <BtnSubcontroleCompleto />
                                                                </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item5' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Proteger' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                            <div className="formulario">
                                                                <BtnSubcontroleCompleto />
                                                            </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item6' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dispositivos' 
                                                                            funcao='Proteger' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                            <div className="formulario">
                                                                <BtnSubcontroleCompleto />
                                                            </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item7' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Identificar' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                            <div className="formulario">
                                                                <BtnSubcontroleCompleto />
                                                            </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item8' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Identificar' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                            <div className="formulario">
                                                                <BtnSubcontroleCompleto />
                                                            </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item9' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Proteger' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                            <div className="formulario">
                                                                <BtnSubcontroleCompleto />
                                                            </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item10' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Proteger' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                            <div className="formulario">
                                                                <BtnSubcontroleCompleto />
                                                            </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item11' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Proteger' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                            <div className="formulario">
                                                                <BtnSubcontroleCompleto />
                                                            </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item12' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Rede' 
                                                                            funcao='Proteger' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                            <div className="formulario">
                                                                <BtnSubcontroleCompleto />
                                                            </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item13' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Proteger' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                            <div className="formulario">
                                                                <BtnSubcontroleCompleto />
                                                            </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item14' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dados' 
                                                                            funcao='Detectar' 
                                                                            assinado='Allan Costa'
                                                                            completado='-'
                                                                            validado='-'
                                                                             />
                                                            <div className="formulario">
                                                                <BtnSubcontroleCompleto />
                                                            </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </section>
    );
}

export { CEI03 };
