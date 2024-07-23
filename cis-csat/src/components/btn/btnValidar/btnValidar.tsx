import './btnValidar.css';
import React from 'react';

type BtnValidarProps = {
    onClick: () => void;
};

const BtnValidar: React.FC<BtnValidarProps> = ({ onClick }) => {
    return (
        <section className='btnValidar'>
            <button className="validar" onClick={onClick}>
                Validar
            </button>
        </section>
    );
};

export { BtnValidar };
