import { Link } from 'react-router';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 NotFoundContainer">
            <h1 className="display-1 fw-bold text-light">404</h1>
            <h2 className="mb-3 text-light">Pagina non trovata</h2>
            <p className="text-light mb-4">
                La pagina che stai cercando non esiste o è stata spostata.
            </p>
            <Link to="/" className="btn BtnBackToHome">
                Torna alla Home
            </Link>
        </div>
    );

}

export default NotFound