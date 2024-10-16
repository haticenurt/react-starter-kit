import modalData from "../modal"
import { useModals } from "../utils/modal"
export default function Modal(){
const modals =useModals()
    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            {modals.map(modal=>{
                const m =modalData.find(m=>m.name==modal.name)
                return <div className="hidden last:block">
                    <m.element/>

                </div> 
            }
            )
            }
            
         
         </div>
    )
}