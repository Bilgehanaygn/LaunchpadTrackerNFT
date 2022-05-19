import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const jwt = JSON.parse(localStorage.getItem("userSession")).jwt;
    return (jwt ? children : <Navigate to="/login" />)
}


export default PrivateRoute;