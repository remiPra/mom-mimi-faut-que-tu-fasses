import React from 'react'
import { useState } from 'react'

function ModalComponent() {
    const [modal, setModal] = useState(false)
    return (
        <div>
            {/* <!-- Button trigger modal--> */}
            <button onClick={()=>{setModal(true);console.log("ddd")}}>Modal</button>
            {modal && (      
                <div style={{display:"flex",justifyContent:'center',alignItems:'center', backgroundColor:'rgba(244,244,244,0.8)', width:'100%',height:"100%", position: "fixed", top: "0px", left: '0px'}}>
                    <div>
                        hello
                        <button onClick={()=>{setModal(false)}}>fermer</button>
                    </div>
                </div>
    )
}


        </div >
    )
}

export default ModalComponent