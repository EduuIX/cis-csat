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
        <main className="formulario">
            <section className="sub-form">
                <form action="">
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="politica-definida">Politica definida</label>
                            <select id="politica-definida">
                                <option value="nenhuma-politica">Nenhuma política</option>
                                <option value="politica-informal">Política Informal</option>
                                <option value="politica-parcialmente-escrita">Política parcialmente escrita</option>
                                <option value="politica-escrita">Política escrita</option>
                                <option value="politica-escrita-aprovada">Política escrita aprovada</option>
                                <option value="nao-aplicavel">Não aplicável</option>
                            </select>

                        </div>
                        <div className="input">
                            <label htmlFor="politica-definida">Controle Implementado</label>
                            <select id="politica-definida">
                                <option value="nao-implementado">Não Implementado</option>
                                <option value="partes-implementado">Partes da política implementada</option>
                                <option value="implementado-alguns">Implementado em alguns sistemas</option>
                                <option value="implementado-maioria">Implementado na maioria dos sistemas</option>
                                <option value="implementado-todos">Implementado em todos os sistemas</option>
                                <option value="nao-aplicavel">Não aplicável</option>
                            </select>
                        </div>
                        <div className="input">
                            <label htmlFor="politica-definida">Controle Automatizado</label>
                            <select id="politica-definida">
                                <option value="nao-automatizado">Não automatizado</option>
                                <option value="partes-automatizadas">Partes da política automatizadas</option>
                                <option value="automatizado-alguns">Automatizado em alguns sistemas</option>
                                <option value="automatizado-maioria">Automatizado na maioria dos sistemas</option>
                                <option value="automatizado-todos">Automatizado em todos os sistemas</option>
                                <option value="nao-aplicavel">Não aplicável</option>
                            </select>
                        </div>
                        <div className="input">
                            <label htmlFor="politica-definida">Controle Relatado</label>
                            <select id="politica-definida">
                                <option value="nao-reportado">Não reportado</option>
                                <option value="partes-relatadas">Partes da política relatadas</option>
                                <option value="relatado-alguns">Relatado em alguns sistemas</option>
                                <option value="relatado-maioria">Relatado na maioria dos sistemas</option>
                                <option value="relatado-todos">Relatado em todos os sistemas</option>
                                <option value="nao-aplicavel">Não aplicável</option>
                            </select>

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