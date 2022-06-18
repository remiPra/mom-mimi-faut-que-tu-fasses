import React, { useState,useEffect, useContext } from 'react'
import { Context } from '../../context'
import { useRouter } from 'next/router'
import { doc, setDoc } from "firebase/firestore";
import { dbs } from '../../firebase/index.js';



function Index() {
    const Router = useRouter()
    const { id } = Router.query
    const [data,setData]= useState([])
    const {state} = useContext(Context)


    useEffect(() => {
        getDataById()
    }, [state])

    const updateTask =async () => {
        console.log(data)
        await setDoc(doc(dbs, "factures", id), {
            title:data.title,
            description:data.description,
            date:data.date,
            action:data.action
          });
          Router.push('/')
    }
    
    const getDataById = async () => {
        await state.factures.map((el, index) => {
            if (el.id == id) {
                setData(el)
                
            }
        })

    }
  return (
    <div>
        {/* {JSON.stringify(data)} */}
        <React.Fragment>
            <div className="shadow-lg p-3 mb-5 bg-white rounded rounded-sm animation col-md-8 mt-4 offset-md-2 p-4  justify-content-center border ">
                <h3 className='mb-4 text-center'>Modifier une tache </h3>

                <div
                    data-aos="fade-left"

                    className="rounded-sm justify-content-center"
                >
                    <div className="form-group">

                        <input placeholder='Titre de la tache ' className="form-control" required value={data.title} onChange={e => { setData({...data,title:e.target.value}); console.log(data) }} type="text" />

                    </div>
                    <div className="form-group">
                        <input placeholder='Description de la tache ' className="form-control" required value={data.description} onChange={e => setData({...data,description:e.target.value})} type="text" />


                    </div>
                    <div className="form-group">

                        <input placeholder='date format JJ.DD.YYYY' className="form-control" required value={data.date} onChange={e => setData({...data,date:e.target.value})} type="text" />

                    </div>
                    <div className="form-group">

                        <input placeholder='Payer ou non' className="form-control" required value={data.action} onChange={e => setData({...data,action:e.target.value})} type="text" />

                    </div>
                    <div>
                        <button onClick={updateTask}>Go</button>
                    </div>
                </div>
            </div>
        </React.Fragment>

    </div>
  )
}

export default Index