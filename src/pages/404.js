import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
export default function Page404(){
    return(
      <div>
        <Helmet>404</Helmet>
       <h1>sayfa bulunamadı</h1>
       <Link to="/">Anasayfaya Dön</Link>
      </div>
    )  
  }