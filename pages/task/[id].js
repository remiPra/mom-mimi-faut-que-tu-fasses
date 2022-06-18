import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import {Image} from 'next/image'
import { Context } from '../../context'
import { dbs, storage } from '../../firebase/index.js'
import { deleteDoc, doc } from 'firebase/firestore'
import { getDownloadURL, ref } from 'firebase/storage'

function Index(props) {
    const Router = useRouter()
    const { state } = useContext(Context)
    const { id } = Router.query
    const [data, setData] = useState([])
    const [url,setUrl]=useState()
    const [bool, setBool] = useState(false)
    
    useEffect(async() => {
        await getDataById()
    }, [state])

    
    const getDataById = async () => {
        await state.factures.map((el, index) => {
            if (el.id == id) {
                setData(el)
                setBool(true)
                if(el.title){
                    getDownloadURL(ref(storage,`/files/${el.title}.jpg`)).then((url) => {
                        setUrl(url);
                    });
                }
            }
        })

    }
    const router = useRouter()
    
    const deleteTask = async () => {
        console.log(dbs)
        await deleteDoc(doc(dbs,'factures', id));
        router.push('/')
    }

    const updateTask = () => {
        router.push(`/updateTask/${id}`)
    }



    return (<>
        {(state.factures.length > 1 && bool) && (<>
            <div className="shadow-lg p-3 mb-5 bg-white rounded rounded-sm animation col-md-8 mt-4 offset-md-2 p-4  justify-content-center border ">

            <ul className="list-group list-group-flush">
                <div className="form-group">
                    <button onClick={deleteTask}>Effacer</button>
                    <button onClick={updateTask}>Modifier</button>
                </div>
                <div className="form-group list-group-item">
                    <label>Titre : </label>
                    <li className="list-group-item">{data.title}</li>
                </div>
                <div className="form-group list-group-item">
                    <label>Description : </label>
                    <li className="list-group-item">{data.description}</li>
                </div>
                <div className="form-group list-group-item">
                    <label>Action : </label>
                    <li className="list-group-item">{data.action}</li>
                </div>
                <img src={url} width='100%' />

            </ul>
            </div>
            </>
        )}
        {(state.factures.length < 10 && !bool) && (
            <button onClick={() => { getDataById() }}>voir l id</button>
        )}
    </>
    )
}
// export async function getStaticPaths() {
//     return {
//       paths: [{ params: { postSlug: 'sth' } }, { params: { postSlug: 'sth-else' } }],
//       fallback: true,
//     };
//   }





//   export async function getStaticPaths() {
//     return {
//       paths: [
//         { params:  } // See the "paths" section below
//       ],
//       fallback: true,  // See the "fallback" section below
//     };
//   }


// export const getStaticProps = async (context) => {
//     const { state } = useContext(Context)
//     const id = context.params.id;
//     const data = await state.factures


//     const thumbnail_ = data.filter(parentid => parentid.id == id)
//     return {
//       props: { data: thumbnail_ },
//     };

//   };
export default Index