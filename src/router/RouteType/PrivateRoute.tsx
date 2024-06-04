import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import PublicContext from 'store/context/PublicContext';

const PrivateRoute = ({ children }: {children: JSX.Element}) => {
    const { logged } = useContext(PublicContext);

    return (logged)
        ? children
        : <Navigate to="/login" />
}

export default PrivateRoute;