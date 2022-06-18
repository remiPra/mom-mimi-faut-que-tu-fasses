// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCOswRFNJQleZQKKAdVlhxMwrEv_20viFw",
    authDomain: "facture-remi-pradere.firebaseapp.com",
    projectId: "facture-remi-pradere",
    storageBucket: "facture-remi-pradere.appspot.com",
    messagingSenderId: "1049271039171",
    appId: "1:1049271039171:web:fcc95fc9934f430a6dde76",
    measurementId: "G-G9XWNX6LHM"
  };


  const app = initializeApp(firebaseConfig)
  const dbs = getFirestore()
  const auth = getAuth(app)
  const storage = getStorage()
  
  export {app,dbs,auth ,storage}