import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom"
export default function privateRoute({children}){
    
    const {user}=useAuth()
    if(!user){
        return <Navigate to="/auth/login" />
    };
    return children;
}