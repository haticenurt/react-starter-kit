import { Helmet } from "react-helmet"
export default function Blog(){
    return(
        <div>
          <Helmet><title>Blog</title></Helmet>
            blog Sayfası
            <ul>
          <li>
            <a href='/blog/todo'>ToDo uygulaması</a><br></br>
        
            </li>
          <li>
          <a href='#'>konu2</a>
          </li>
        </ul>
        </div>
    )
}