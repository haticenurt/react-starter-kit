import { useParams } from "react-router-dom"
export default function Post(){
    const {url}=useParams()
    console.log(url)
    return(
        <div>
            Post page={url}
        </div>
    )
}