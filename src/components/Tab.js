import { useEffect, useState } from "react"


function Tab({children, activeTab}){
    console.log(children)


const [active,setActive]= useState(activeTab)
useEffect(()=>{
setActive(activeTab)
},[activeTab])

return(
    <div>
        "<nav>
            {children.map((t,index) => (
                <button
                     onClick={()=>setActive(index)} 
                     className={active==index ? 'bg-green-100': 'bg-gray-100'} 
                     key={index}
                     >
                        {t.props.title}
                </button>
                    ))}
            </nav>
           {children[active ]}
        </div>
    )
}
Tab.Panel=function({children,title}){
  
    return(
      <div>{children} {title}</div>  
    )
}
export default Tab