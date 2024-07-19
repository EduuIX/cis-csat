import { Link } from 'react-router-dom';
import './cei.css';

interface CeiProps {
    texto: string;
    link: string;
    clss: string
};

const CEI: React.FC<CeiProps> = ({ texto, link, clss })=> {
    return(
        <Link className={`cei ${clss}`} to={link}>
            {texto}
        </Link>
    );
}

export {CEI};