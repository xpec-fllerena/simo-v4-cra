import { Navigate } from "react-router-dom";
import { useContext } from "react";
import PublicContext from "store/context/PublicContext";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { logged } = useContext(PublicContext);

  return !logged ? children : <Navigate to="/home" />;
};

export default PublicRoute;
