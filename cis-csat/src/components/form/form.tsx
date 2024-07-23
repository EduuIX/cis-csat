import React, { useState } from 'react';
import axios from 'axios';
import { BtnValidar } from '../btn/btnValidar/btnValidar';
import './form.css';
import { BtnDevolver } from '../btn/btnDevolver/btnDevolver';

type FormularioProps = {
    ativo: string;
    funcao: string;
    assinado: string;
    completado: string;
    validado: string;
};

const Formulario: React.FC<FormularioProps> = ({ ativo, funcao, assinado, completado, validado }) => {
    const [politicaDefinida, setPoliticaDefinida] = useState('nenhuma-politica');
    const [controleImplementado, setControleImplementado] = useState('nao-implementado');
    const [controleAutomatizado, setControleAutomatizado] = useState('nao-automatizado');
    const [controleRelatado, setControleRelatado] = useState('nao-reportado');

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target;
        switch (id) {
            case 'politica-definida':
                setPoliticaDefinida(value);
                break;
            case 'controle-implementado':
                setControleImplementado(value);
                break;
            case 'controle-automatizado':
                setControleAutomatizado(value);
                break;
            case 'controle-relatado':
                setControleRelatado(value);
                break;
            default:
                break;
        }
    };

    const handleValidation = async () => {
        const formData = {
            politicaDefinida,
            controleImplementado,
            controleAutomatizado,
            controleRelatado,
            ativo,
            funcao,
            assinado,
            completado,
            validado
        };

        try {
            const response = await axios.post('http://localhost:4000/save', formData);
            console.log(response.data);
            // Adicione aqui qualquer lógica adicional que você precise após a resposta do servidor
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <main className="formulario">
            <section className="sub-form">
                <form action="">
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="politica-definida">Política definida</label>
                            <select id="politica-definida" value={politicaDefinida} onChange={handleSelectChange}>
                                <option value="nenhuma-politica">Nenhuma política</option>
                                <option value="politica-informal">Política Informal</option>
                                <option value="politica-parcialmente-escrita">Política parcialmente escrita</option>
                                <option value="politica-escrita">Política escrita</option>
                                <option value="politica-escrita-aprovada">Política escrita aprovada</option>
                                <option value="nao-aplicavel">Não aplicável</option>
                            </select>
                        </div>
                        <div className="input">
                            <label htmlFor="controle-implementado">Controle Implementado</label>
                            <select id="controle-implementado" value={controleImplementado} onChange={handleSelectChange}>
                                <option value="nao-implementado">Não Implementado</option>
                                <option value="partes-implementado">Partes da política implementada</option>
                                <option value="implementado-alguns">Implementado em alguns sistemas</option>
                                <option value="implementado-maioria">Implementado na maioria dos sistemas</option>
                                <option value="implementado-todos">Implementado em todos os sistemas</option>
                                <option value="nao-aplicavel">Não aplicável</option>
                            </select>
                        </div>
                        <div className="input">
                            <label htmlFor="controle-automatizado">Controle Automatizado</label>
                            <select id="controle-automatizado" value={controleAutomatizado} onChange={handleSelectChange}>
                                <option value="nao-automatizado">Não automatizado</option>
                                <option value="partes-automatizadas">Partes da política automatizadas</option>
                                <option value="automatizado-alguns">Automatizado em alguns sistemas</option>
                                <option value="automatizado-maioria">Automatizado na maioria dos sistemas</option>
                                <option value="automatizado-todos">Automatizado em todos os sistemas</option>
                                <option value="nao-aplicavel">Não aplicável</option>
                            </select>
                        </div>
                        <div className="input">
                            <label htmlFor="controle-relatado">Controle Relatado</label>
                            <select id="controle-relatado" value={controleRelatado} onChange={handleSelectChange}>
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
                            <h3>Completado por</h3>
                            <h4 className='name'>{completado}</h4>
                        </div>
                        <div className="desc-cont">
                            <h3>Validado por</h3>
                            <h4 className='name'>{validado}</h4>
                        </div>
                    </div>
                </form>
            </section>
            <BtnDevolver onClick={handleValidation} />
            <BtnValidar onClick={handleValidation} />
            <div className="atribuicao">
                <h3>Atribuído a</h3>
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
};

export { Formulario };
