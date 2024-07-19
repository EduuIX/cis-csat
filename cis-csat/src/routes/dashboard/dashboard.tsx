import { BarGraph } from '../../components/barGraph/barGraph';
import { Card } from '../../components/cards/card/card';
import { CardText } from '../../components/cards/cardText/cardText';
import { CEI } from '../../components/cei/cei';
import { Footer } from '../../components/footer/footer';
import { GroupBarGraph } from '../../components/groupBarGraph/groupBarGraph';
import { Menu } from '../../components/menu/menu';
import { PolicyBarGraph } from '../../components/policyBarGraph/policyBarGraph';
import { RadarGraph } from '../../components/radarGraph/radarGraph';
import { SingleBarGraph } from '../../components/singleBarGraph/singleBarGraph';
import './dashboard.css';

const Dashboard = () => {
    return (
        <section className="dashboard">
            <div className="container">
                <div className="menu">
                    <Menu />
                </div>
                <main className='main'>
                    <div className="cabecalho">
                        <div className="info">
                            <p className='path'><span>PRODEPA</span> - Painel</p>
                            <div className="titulo">
                                <h2>Painel PRODEPA</h2>
                                <i className="fa-solid fa-circle-info"></i>
                            </div>
                            <p className='desc'>Clique em qualquer controle CIS abaixo para enviar sua resposta</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cardsArea">
                            <Card 
                                textoCima='Média da Organização'
                                textoCentro='3'
                                nivel1='a'
                                nivel2='b'
                                nivel3='b'
                                nivel4='b'
                                nivel5='b'
                            />
                            <CardText 
                                textoCima='Média industrial'
                                textoCentro='17'
                                textoBaixo='Organização utilizadas para média: 31'
                            />
                            <Card 
                                textoCima='% de conclusão'
                                textoCentro='4'
                                nivel1='a'
                                nivel2='b'
                                nivel3='b'
                                nivel4='b'
                                nivel5='b'
                            />
                            <Card 
                                textoCima='Validação %'
                                textoCentro='1'
                                nivel1='a'
                                nivel2='b'
                                nivel3='b'
                                nivel4='b'
                                nivel5='b'
                            />
                        </div>
                         <div className="ceiAreas">
                            <CEI link='/cei/01' texto='CEI C01' clss='b'/>
                            <CEI link='/cei/02' texto='CEI C02' clss='b'/>
                            <CEI link='/cei/03' texto='CEI C03' clss='b'/>
                            <CEI link='/cei/04' texto='CEI C04' clss='b'/>
                            <CEI link='/cei/05' texto='CEI C05' clss='b'/>
                            <CEI link='/cei/06' texto='CEI C06' clss='b'/>
                            <CEI link='/cei/07' texto='CEI C07' clss='b'/>
                            <CEI link='/cei/08' texto='CEI C08' clss='b'/>
                            <CEI link='/cei/09' texto='CEI C09' clss='b'/>
                            <CEI link='/cei/010' texto='CEI C010' clss='b'/>
                            <CEI link='/cei/011' texto='CEI C011' clss='b'/>
                            <CEI link='/cei/012' texto='CEI C012' clss='b'/>
                            <CEI link='/cei/013' texto='CEI C013' clss='b'/>
                            <CEI link='/cei/014' texto='CEI C014' clss='b'/>
                            <CEI link='/cei/015' texto='CEI C015' clss='b'/>
                            <CEI link='/cei/016' texto='CEI C016' clss='b'/>
                            <CEI link='/cei/017' texto='CEI C017' clss='b'/>
                            <CEI link='/cei/018' texto='CEI C018' clss='b'/>
                        </div>
                        <div className="graphAreas">
                            <div className="bar">
                                <BarGraph />
                            </div>
                            <div className="radar">
                                <RadarGraph />
                            </div>
                            <div className="singleBar">
                                <SingleBarGraph />
                            </div>
                            <div className="groupBar">
                                <GroupBarGraph />
                            </div>
                            <div className="policyBar">
                                <PolicyBarGraph />
                            </div>
                            <div className="testeee"></div>
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

export {Dashboard};