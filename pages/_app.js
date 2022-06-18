import '../styles/globals.css'
import React, { useEffect, useContext,useState } from 'react'
import { dbs } from '../firebase/index'
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore'
import { Context, Provider } from '../context'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'
import sophie from '../public/sopgie.jpg'


const styles= {
  h1:{
    position : 'absolute',
    top:'0px',
    width:'100%',
    right:'2px'
  }
}

function MyApp({ Component, pageProps }) {



  const AuthComponent = React.memo(() => {
    const { dispatch, state } = useContext(Context);
    useEffect(() => {

      console.log(state)
      const collectionRef = collection(dbs, "factures")
      const q = query(collectionRef, orderBy("date", "desc"));
      onSnapshot(q, (querySnapshot) => {
        let oo = []
        querySnapshot.docs.map(
          (doc) => {
            console.log(doc.data());
            oo.push({ ...doc.data(), id: doc.id });
            dispatch({ type: "GET_FACTURES", payload: oo });
          }
        )

      })
    }, [])

    return null


  })
  AuthComponent.displayName = 'AuthComponent';
  const [bool,setBool]= useState(true)
 
  useEffect(()=>{
    setTimeout(()=>setBool(false),2000)
  },[])

  return (
    <Provider>
      <AuthComponent />
      {(bool == true) ? (<div>
        
        <main style={{position:'relative',width:"100%"}}>
        <h1 style={styles.h1}>Mon Mimi faut que tu fasse</h1>
        <img src={sophie.src} width="100%" height="100%" />
      </main>
        
      </div>
      ) : (<>
        <Navbar />
        <Component {...pageProps} />
      </>
      )}
    </Provider>
  )
}

export default MyApp
