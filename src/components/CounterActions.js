
export default function CounterActions({count,setCount}){
    return(
     <div>
        <button onClick={()=>setCount(count-1)}>azalt(-)</button>
        <button onClick={()=>setCount(count+1)}>arttır(+)</button>

     </div>

   
    )
 }