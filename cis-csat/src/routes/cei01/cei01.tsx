import { useState } from 'react';
import { Card } from '../../components/cards/card/card';
import { Footer } from '../../components/footer/footer';
import { Menu } from '../../components/menu/menu';
import { RadarGraph } from '../../components/radarGraph/radarGraph';
import './cei01.css';
import ToggleButton from '../../components/toggleButton/toggleButton';
import { Tag } from '../../components/tag/tag';
import { Formulario } from '../../components/form/form';
import { BtnReverterVelidaco } from '../../components/btn/btnReverterValidacao/btnReverterVelidaco';
import { BtnSubcontroleCompleto } from '../../components/btn/btnSubcontroleCompleto/btnSubcontroleCompleto';
import { BtnDevolverValidar } from '../../components/btn/btnDevolverValidar/btnDevolverValidar';
import { CardText } from '../../components/cards/cardText/cardText';

const CEI01 = () => {
    const items = [
        { key: 'item1', title: '1.1 Estabelecer e manter um inventário detalhado de ativos empresariais', group: 'Grupo 1', submenuContent: 'Estabeleça e mantenha um inventário preciso, detalhado e atualizado de todos os ativos corporativos com potencial para armazenar ou processar dados, incluindo: dispositivos de usuário final (incluindo portáteis e móveis), dispositivos de rede, dispositivos não computacionais/IoT e servidores. Certifique-se de que o inventário registre o endereço de rede (se estático), endereço de hardware, nome da máquina, proprietário do ativo corporativo, departamento para cada ativo e se o ativo foi aprovado para se conectar à rede. Para dispositivos móveis de usuário final, ferramentas do tipo MDM podem dar suporte a esse processo, quando apropriado. Esse inventário inclui ativos conectados à infraestrutura física, virtual, remotamente e aqueles dentro de ambientes de nuvem. Além disso, inclui ativos que são regularmente conectados à infraestrutura de rede da empresa, mesmo que não estejam sob o controle da empresa. Revise e atualize o inventário de todos os ativos corporativos semestralmente ou com mais frequência.' },
        { key: 'item2', title: '1.2 Endereço de ativos não autorizados', group: 'Grupo 1', submenuContent: 'Garanta que exista um processo para lidar com ativos não autorizados semanalmente. A empresa pode escolher remover o ativo da rede, negar que o ativo se conecte remotamente à rede ou colocar o ativo em quarentena.' },
        { key: 'item3', title: '1.3 Utilize uma ferramenta de descoberta ativa', group: 'Grupo 2', submenuContent: 'Utilize uma ferramenta de descoberta ativa para identificar ativos conectados à rede da empresa. Configure a ferramenta de descoberta ativa para executar diariamente ou com mais frequência.' },
        { key: 'item4', title: '1.4 Use o registro do protocolo de configuração dinâmica de host (DHCP)', group: 'Grupo 2', submenuContent: 'Use o registro DHCP em todos os servidores DHCP ou ferramentas de gerenciamento de endereço de Protocolo de Internet (IP) para atualizar o inventário de ativos da empresa. Revise e use os registros para atualizar o inventário de ativos da empresa semanalmente ou com mais frequência.' },
        { key: 'item5', title: '1.5 Use uma ferramenta de descoberta de ativos passivos', group: 'Grupo 3', submenuContent: 'Use uma ferramenta de descoberta passiva para identificar ativos conectados à rede da empresa. Revise e use varreduras para atualizar o inventário de ativos da empresa pelo menos semanalmente, ou com mais frequência.' },
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
        <section className="cei01">
            <div className="container">
                <div className="menu">
                    <Menu />
                </div>
                <main className='main'>
                    <div className="cabecalho">
                        <div className="info">
                            <p className='path'><span>PRODEPA</span> - CEI 01</p>
                            <div className="titulo">
                                <h2>Painel CIS C01</h2>
                                <i className="fa-solid fa-circle-info"></i>
                            </div>
                            <h4>Inventário e Controle de Ativos Empresariais</h4>
                            <p className='desc'>Gerencie ativamente (inventário, rastreie e corrija) todos os ativos corporativos (dispositivos de usuário final, incluindo portáteis e móveis; dispositivos de rede; dispositivos não computacionais/Internet das Coisas (IoT); e servidores) conectados à infraestrutura fisicamente, virtualmente, remotamente e aqueles dentro de ambientes de nuvem, para saber com precisão a totalidade dos ativos que precisam ser monitorados e protegidos dentro da empresa. Isso também dará suporte à identificação de ativos não autorizados e não gerenciados para remover ou remediar.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cardsArea">
                            <Card 
                                textoCima='Pontuação média de controle'
                                textoCentro='29'
                                nivel1='a'
                                nivel2='a'
                                nivel3='b'
                                nivel4='b'
                                nivel5='b'
                            />
                            <CardText 
                                textoCima='Pontuação média da industria de controle'
                                textoCentro='31'
                                textoBaixo='Organização utilizadas para média: 29'
                            />
                            <Card 
                                textoCima='Porcentagem concluída'
                                textoCentro='60'
                                nivel1='a'
                                nivel2='a'
                                nivel3='a'
                                nivel4='b'
                                nivel5='b'
                            />
                            <Card 
                                textoCima='Porcentagem validada'
                                textoCentro='20'
                                nivel1='a'
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
                                                    <div className={`circle ${item.key}`}></div>
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
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='CM-8' cls='b'/>
                                                                <Tag cod1='NIST CFS' cod2='PR.D5-3' cls='y'/>
                                                                <Tag cod1='NIST NIST CFS' cod2='ID.AM-1' cls='y'/>
                                                                <Tag cod1='NIST NIST CFS' cod2='ID.AM-3' cls='y'/>
                                                                <Tag cod1='NIST NIST CFS' cod2='DE.AE-1' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item2' && (
                                                            <>
                                                                <Tag cod1='NIST CSF' cod2='PR.DS-3' cls='y'/>
                                                            </>
                                                        )}
                                                        {item.key === 'item3' && (
                                                            <>
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='SI-4' cls='b'/>
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
                                                                <Tag cod1='NIST 800-53 Rev 5' cod2='SI-4' cls='b'/>
                                                                <Tag cod1='NIST CSF' cod2='DE.CM-7' cls='y'/>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className="formulario-submenu">
                                                        {item.key === 'item1' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dispositivos' 
                                                                            funcao='Detectar' 
                                                                            assinado='Allan Costa'
                                                                            completado='Allan Costa'
                                                                            validado='Allan Costa'
                                                                             />
                                                                <div className="formulario">
                                                                    <BtnReverterVelidaco />
                                                                </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item2' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dispositivos' 
                                                                            funcao='Reponder' 
                                                                            assinado='Allan Costa'
                                                                            completado='Allan Costa'
                                                                            validado='-'
                                                                             />
                                                                <div className="formulario">
                                                                    <BtnDevolverValidar />
                                                                </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item3' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dispositivos' 
                                                                            funcao='Detectar' 
                                                                            assinado='Allan Costa'
                                                                            completado='Allan Costa'
                                                                            validado='-'
                                                                             />
                                                                <div className="formulario">
                                                                    <BtnDevolverValidar />
                                                                </div>
                                                            </>
                                                        )}
                                                        {item.key === 'item4' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dispositivos' 
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
                                                        {item.key === 'item5' && (
                                                            <>
                                                                <Formulario 
                                                                            ativo='Dispositivos' 
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

export { CEI01 };
