import './btnDevolver.css';
import React from 'react';

type BtnDevolverProps = {
    onClick: () => void;
};

const BtnDevolver: React.FC<BtnDevolverProps> = ({ onClick }) => {
    return (
        <section className="btnDevolver">
            <button className="devolver" onClick={onClick}>
                Devolver
            </button>
        </section>
    );
};

export { BtnDevolver };
