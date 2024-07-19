import './cardText.css';

type CardTextProps = {
    textoCima: string;
    textoCentro: string;
    textoBaixo: string;
}

const CardText:React.FC<CardTextProps>  = ({ textoCima, textoCentro, textoBaixo }) => {
    return (
        <section className="cardText">
            <div className="card-content">
                <p className="titulo">{textoCima}</p>
                <p className="ponto">{textoCentro}</p>
                <p className="desc">{textoBaixo}</p>
            </div>
        </section>
    );
}
export {CardText};