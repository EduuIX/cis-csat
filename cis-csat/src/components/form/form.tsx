import './form.css';

type formularioProps = {
    ativo: string;
    funcao: string;
    assinado: string;
    completado: string;
    validado: string;

}

const Formulario:React.FC<formularioProps> = ({ ativo, funcao, assinado, completado, validado }) => {
    return (
        <main className="formulario">           <section className="sub-form">
                <form action="">
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="politica-definida">Politica definida</label>
                            <input type="text" id='politica-definida' placeholder='Nenhuma política'/>
                        </div>
                        <div className="input">
                            <label htmlFor="politica-definida">Controle Implementado</label>
                            <input type="text" id='politica-definida' placeholder='Não implementado'/>
                        </div>
                        <div className="input">
                            <label htmlFor="politica-definida">Controle Automatizado</label>
                            <input type="text" id='politica-definida' placeholder='Não automatizado'/>
                        </div>
                        <div className="input">
                            <label htmlFor="politica-definida">Controle Relatado</label>
                            <input type="text" id='politica-definida' placeholder='Não reportado'/>
                        </div>
                    </div>
                    <div className="descricoes">
                        <div className="desc-cont">
                            <h3>Tipo de ativo</h3>
                            <h4>{ativo}</h4>
                        </div>
                        <div className="desc-cont">
                            <h3>Função de segurança</h3>
                            <h4>{funcao}</h4>
                        </div>
                        <div className="desc-cont">
                            <h3>Assinado por</h3>
                            <h4 className='name'>{assinado}</h4>
                        </div>
                        <div className="desc-cont">
                            <h3>completado por</h3>
                            <h4 className='name'>{completado}</h4>
                        </div>
                        <div className="desc-cont">
                            <h3>Validado por</h3>
                            <h4 className='name'>{validado}</h4>
                        </div>
                    </div>
                </form>
            </section>
            <div className="atribuicao">
                <h3>Atribuido a</h3>
                <div className="resp">
                    <h4>Allan Costa</h4>
                    <h5>Devido em 3 de julho de 2024</h5>
                </div>
                <div className="evidencia">
                    <h4>Documentos de evidência</h4>
                    <h5>Nenhum documento de evidência carregado</h5>
                </div>
            </div>
        </main>
    );
}

export {Formulario};