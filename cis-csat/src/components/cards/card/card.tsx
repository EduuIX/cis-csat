import './card.css';

type CardProps = {
    textoCima: string;
    textoCentro: string;
    nivel1: string;
    nivel2: string;
    nivel3: string;
    nivel4: string;
    nivel5: string;
}

const Card:React.FC<CardProps>  = ({ textoCima, textoCentro, nivel1, nivel2, nivel3, nivel4, nivel5 }) => {
    return (
        <section className="card">
            <div className="card-content">
                <p className="titulo">{textoCima}</p>
                <p className="ponto">{textoCentro}</p>
                <div className="desc">
                    <div className={`circle ${nivel1}`}></div>
                    <div className={`circle ${nivel2}`}></div>
                    <div className={`circle ${nivel3}`}></div>
                    <div className={`circle ${nivel4}`}></div>
                    <div className={`circle ${nivel5}`}></div>
                </div>
            </div>
        </section>
    );
}
export {Card}