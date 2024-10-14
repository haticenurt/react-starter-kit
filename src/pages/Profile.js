import React,{ useState } from "react"
import Counter from "../components/Counter";
import CounterActions from "../components/CounterActions";

export default function Profile(){
  const [count,setCount]=useState(0);

    return(
      <div>
          <Counter count={count} setCount={setCount}/>
          <CounterActions count={count} setCount={setCount}/>
      </div>
    )  
  }
  