import { createContext,useContext, useState } from "react";

const AuthContext= createContext()

export const AuthProvider=({children})=>{

const [user,setUser]=useState(false)
const data={
    user,
    setUser
}
    return(
        <AuthContext.Provider value={data}>
        {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>{
    return useContext()
    
}