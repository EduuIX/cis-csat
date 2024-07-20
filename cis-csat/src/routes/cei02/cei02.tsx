import { useState } from 'react';
import { Card } from '../../components/cards/card/card';
import { Footer } from '../../components/footer/footer';
import { Menu } from '../../components/menu/menu';
import { RadarGraph } from '../../components/radarGraph/radarGraph';
import './cei02.css';
import ToggleButton from '../../components/toggleButton/toggleButton';
import { Tag } from '../../components/tag/tag';
import { Formulario } from '../../components/form/form';
import { BtnSubcontroleCompleto } from '../../components/btn/btnSubcontroleCompleto/btnSubcontroleCompleto';
import { CardText } from '../../components/cards/cardText/cardText';

const CEI02 = () => {
    const items = [
        { key: 'item1', title: '2.1 Estabelecer e manter um inventário de software', group: 'Grupo 1', submenuContent: 'Estabeleça e mantenha um inventário detalhado de todos os softwares licenciados instalados em ativos corporativos. O inventário de software deve documentar o título, o editor, a data inicial de instalação/uso e o propósito comercial de cada entrada; quando apropriado, inclua o Uniform Resource Locator (URL), app store(s), versão(ões), mecanismo de implantação e data de descomissionamento. Revise e atualize o inventário de software semestralmente ou com mais frequência.' },
        { key: 'item2', title: '2.2 Garantir que o software autorizado seja suportado atualmente ', group: 'Grupo 1', submenuContent: 'Garanta que apenas o software suportado atualmente seja designado como autorizado no inventário de software para ativos corporativos. Se o software não for suportado, mas for necessário para o cumprimento da missão da empresa, documente uma exceção detalhando controles de mitigação e aceitação de risco residual. Para qualquer software não suportado sem uma documentação de exceção, designe como não autorizado. Revise a lista de software para verificar o suporte de software pelo menos mensalmente, ou com mais frequência.' },
        { key: 'item3', title: '2.3 Endereço de software não autorizado', group: 'Grupo 1', submenuContent: 'Garanta que o software não autorizado seja removido do uso em ativos corporativos ou receba uma exceção documentada. Revise mensalmente ou com mais frequência.' },
        { key: 'item4', title: '2.4 Utilizar ferramentas automatizadas de inventário de software', group: 'Grupo 2', submenuContent: 'Utilize ferramentas de inventário de software, sempre que possível, em toda a empresa para automatizar a descoberta e a documentação do software instalado.' },
        { key: 'item5', title: '2.5 Permitir Software Autorizado na Lista de Permissões', group: 'Grupo 2', submenuContent: 'Use controles técnicos, como lista de permissões de aplicativos, para garantir que apenas software autorizado possa ser executado ou acessado. Reavalie semestralmente ou com mais frequência.'},
        { key: 'item6', title: '2.6 Lista de permissões de bibliotecas autorizadas', group: 'Grupo 2', submenuContent: 'Use controles técnicos para garantir que apenas bibliotecas de software autorizadas, como arquivos .dll, .ocx, .so, etc. específicos, tenham permissão para carregar em um processo do sistema. Bloqueie o carregamento de bibliotecas não autorizadas em um processo do sistema. Reavalie semestralmente ou com mais frequência.'},
        { key: 'item7', title: '2.7 Lista de permissões de scripts autorizados', group: 'Grupo 3', submenuContent: 'Use controles técnicos, como assinaturas digitais e controle de versão, para garantir que apenas scripts autorizados, como arquivos .ps1, .py, etc. específicos, tenham permissão para executar. Bloqueie scripts não autorizados de executar. Reavalie semestralmente ou com mais frequência.'},
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
        <section className="cei02">
            <div className="container">
                <div className="menu">
                    <Menu />
                </div>
                <main className='main'>
                    <div className="cabecalho">
                        <div className="info">
                            <p className='path'><span>PRODEPA</span> - CEI 02</p>
                            <div className="titulo">
                                <h2>Painel CIS C02</h2>
                                <i className="fa-solid fa-circle-info"></i>
                            </div>
                            <h4>Inventário e Controle de Ativos de Software</h4>
                            <p className='desc'>Gerencie ativamente (faça o inventário, rastreie e corrija) todos os softwares (sistemas operacionais e aplicativos) na rede para que somente softwares autorizados sejam instalados e possam ser executados, e que softwares não autorizados e não gerenciados sejam encontrados e impedidos de serem instalados ou executados.</p>
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
                                textoBaixo='Organização utilizadas para média: 23'
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
                                                    <div className="tag-container" >
                                                        {item.key === 'item1' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='CM-8' cls='b'/>
                                                                <Tag cod1='NIST CFS' cod2='ID.AM-2' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item2' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='SA-22' cls='b'/>
                                                                <Tag cod1='NIST 800-53' cod2='PR.DS-5' cls='y'/>
                                                                <Tag cod1='NIST 800-53' cod2='ID.AM-2' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item3' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='CM-11' cls='b'/>
                                                                <Tag cod1='NIST CFS' cod2='DE.CM-7' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item4' && (
                                                            <>
                                                                <Tag cod1='NIST CSF' cod2='DE.CM-7' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item5' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='CM-10' cls='b'/>
                                                                <Tag cod1='NIST CSF' cod2='DE.CM-7' cls='y'/>
                                                                <Tag cod1='NIST CSF' cod2='PR.DS-6' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item6' && (
                                                            <>
                                                                <Tag cod1='NIST CSF' cod2='DE.CM-7' cls='y'/>
                                                                <Tag cod1='NIST CSF' cod2='PR.DS-6' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item7' && (
                                                            <>
                                                                <Tag cod1='NIST CSF' cod2='DE.CM-7' cls='y'/>
                                                                <Tag cod1='NIST CSF' cod2='PR.DS-6' cls='y'/>
                                                                <Tag cod1='NIST CSF' cod2='PR.PT-3' cls='y'/>
                                                                <Tag cod1='NIST CSF' cod2='RP.IP-1' cls='y'/>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className="formulario-submenu">
                                                        {item.key === 'item1' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Formulários' 
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
                                                                            ativo='Formulários' 
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
                                                                            ativo='Formulários' 
                                                                            funcao='Responder' 
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
                                                                            ativo='Formulários' 
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
                                                        {item.key === 'item5' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Formulários' 
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
                                                                            ativo='Formulários' 
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
                                                                            ativo='Formulários' 
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

export { CEI02 };
