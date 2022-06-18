import React from 'react'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { dbs,storage } from '../../firebase/index';

import {useRouter} from 'next/router'
import {  getDownloadURL, ref, uploadBytes, uploadBytesResumable  } from "firebase/storage";

function Index() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [action, setAction] = useState();
    const router = useRouter()
    const [percent,setPercent] = useState()
    const addTask = async () => {
        // Add a new document with a generated id.
        console.log(dbs);
        console.log(collection(dbs, "factures"));
        const storageRef = ref(storage, `/files/${title}.jpg`)
        await addDoc(collection(dbs , "factures"), {
            title: title,
            description: description,
            date: date,
            action: action
        })
        const uploadTask = uploadBytesResumable(storageRef, fileZ);
        await  uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
     
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        ); 
        router.push('/')
    }
    const [fileZ,setFile]=useState();
    const handleChange = (event) => {
        setFile(event.target.files[0]);
        console.log(event.target.files[0]);
        
    }

    return (
        <React.Fragment>
            <div className="shadow-lg p-3 mb-5 bg-white rounded rounded-sm animation col-md-8 mt-4 offset-md-2 p-4  justify-content-center border ">
                <h3 className='mb-4 text-center'>Creer une tache </h3>

                <div
                    data-aos="fade-left"

                    className="rounded-sm justify-content-center"
                >
                    <div className="form-group">

                        <input placeholder='Titre de la tache ' className="form-control" required value={title} onChange={e => { setTitle(e.target.value); console.log(e.target.value) }} type="text" />

                    </div>
                    <div className="form-group">
                        <input placeholder='Description de la tache ' className="form-control" required value={description} onChange={e => setDescription(e.target.value)} type="text" />


                    </div>
                    <div className="form-group">

                        <input placeholder='date format JJ.DD.YYYY' className="form-control" required value={date} onChange={e => setDate(e.target.value)} type="text" />

                    </div>
                    <div className="form-group">

                        <input placeholder='Payer ou non' className="form-control" required value={action} onChange={e => setAction(e.target.value)} type="text" />

                    </div>
                    <div className="form-group">

                        <input className="form-control" type="file" onChange={handleChange}/>

                    </div>
                    {JSON.stringify(fileZ?.name)}
                    {percent}
                    {/* {JSON.stringify(fileZ)} */}
                    <div>
                        <button onClick={addTask}>Go</button>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Index