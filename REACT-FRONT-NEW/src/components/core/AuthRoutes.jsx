import { Navigate, useLocation } from "react-router-dom";

function AuthRoute({component }) {
  const location = useLocation();

  const token = localStorage.getItem("token")
  //En vez de poner arriba el user, llamamos al token y lo usamos en el condicional
  console.log(location);
  if (token) return component;
  if (!token)
    return <Navigate to="/" state={{ prevRoute: location.pathname }} />;
}
export default AuthRoute;