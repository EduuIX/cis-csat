import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setOverallAverage } from '../../store/averageSlice';
import './form.css';
import { BtnValidar } from '../btn/btnValidar/btnValidar';
import { BtnDevolver } from '../btn/btnDevolver/btnDevolver';

type FormularioProps = {
    formId: string;
    ativo: string;
    funcao: string;
    assinado: string;
    completado: string;
    validado: string;
};

const Formulario: React.FC<FormularioProps> = ({ formId, ativo, funcao, assinado, completado, validado }) => {
    const dispatch = useDispatch();

    const [politicaDefinida, setPoliticaDefinida] = useState('nenhuma-politica');
    const [controleImplementado, setControleImplementado] = useState('nenhum-controle');
    const [controleAutomatizado, setControleAutomatizado] = useState('nenhuma-automacao');
    const [controleRelatado, setControleRelatado] = useState('nenhum-relato');

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
            formId,
            politicaDefinida,
            controleImplementado,
            controleAutomatizado,
            controleRelatado,
        };

        try {
            const response = await axios.post('https://cis-csat-backend.onrender.com/form/save', formData);
            console.log(response.data);

            const overallResponse = await axios.get('https://cis-csat-backend.onrender.com/form/overall-average');
            const overallAverage = overallResponse.data.overallAverage;
            dispatch(setOverallAverage(overallAverage));
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <main className="formulario">
            <section className="sub-form">
                <form onSubmit={(e) => e.preventDefault()}>
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
                                <option value="nenhum-controle">Não Implementado</option>
                                <option value="controle-informal">Partes da política implementada</option>
                                <option value="controle-parcialmente-implementado">Implementado em alguns sistemas</option>
                                <option value="controle-implementado">Implementado na maioria dos sistemas</option>
                                <option value="controle-implementado-aprovado">Implementado em todos os sistemas</option>
                                <option value="nao-aplicavel">Não aplicável</option>
                            </select>
                        </div>
                        <div className="input">
                            <label htmlFor="controle-automatizado">Controle Automatizado</label>
                            <select id="controle-automatizado" value={controleAutomatizado} onChange={handleSelectChange}>
                                <option value="nenhuma-automacao">Não automatizado</option>
                                <option value="automacao-informal">Partes da política automatizadas</option>
                                <option value="automacao-parcial">Automatizado em alguns sistemas</option>
                                <option value="automacao-total">Automatizado na maioria dos sistemas</option>
                                <option value="automacao-total-aprovada">Automatizado em todos os sistemas</option>
                                <option value="nao-aplicavel">Não aplicável</option>
                            </select>
                        </div>
                        <div className="input">
                            <label htmlFor="controle-relatado">Controle Relatado</label>
                            <select id="controle-relatado" value={controleRelatado} onChange={handleSelectChange}>
                                <option value="nenhum-relato">Não reportado</option>
                                <option value="relato-informal">Partes da política relatadas</option>
                                <option value="relato-parcial">Relatado em alguns sistemas</option>
                                <option value="relato-completo">Relatado na maioria dos sistemas</option>
                                <option value="relato-completo-aprovado">Relatado em todos os sistemas</option>
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
            <div className="btns">
                <BtnDevolver onClick={handleValidation} />
                <BtnValidar onClick={handleValidation}/>
            </div>
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
