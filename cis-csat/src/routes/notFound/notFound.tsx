import { Navigate } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <Navigate to="/not-found" />
            <h2>404 - Página não encontrada</h2>
            <p>Desculpe, a página que você está procurando não existe.</p>
        </div>
    );
};

export { NotFound }