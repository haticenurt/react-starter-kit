import { createModal, destroyModal } from "../utils/modal"
import Header from "./components/header"
export default function LoginModal(){
    return(
        <div className="w-[500px]">
            <header title="Giriş Yap"/>
            login modal<br/>
         <button onClick={()=>{createModal('register')}}>Register Modalı yükle</button>   <br/>
         <button onClick={destroyModal}>Kapat</button>
     </div>
    )
}