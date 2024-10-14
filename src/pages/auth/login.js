import { useAuth } from "../../context/AuthContext";
import { useNavigate,useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
 export default function Login(){
    const navigate=useNavigate()
    const location=useLocation()
    const {setUser}=useAuth()

    const loginHandle=()=>{
        setUser({
            id:1,
            userName:'hatice123'
        })
        navigate(location?.state?.return_url || '/',{
            replace:true,
            state:{
                name: 'hatice'
            },
        })
    }
    return(
        <div>
            <Helmet>
                <title>login</title>
            </Helmet>
            login page <br/>
         <button onClick={loginHandle}>giriş yap</button>
        </div>
    )
 } 