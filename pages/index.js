import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context';
import { useRouter } from 'next/dist/client/router';
export default function Home() {
  const { state } = useContext(Context)
  const router = useRouter()

  const seetaskId = (id) => {
    router.push(`./task/${id}`)
  }
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className={styles.main}>
        <div className="shadow-lg p-3 mb-5 bg-white rounded rounded-sm animation col-md-8 mt-4 offset-md-2 p-4  justify-content-center border ">
          <h2 className='text-center'>Listes des Taches</h2>
          <Link passHref={true} href={'./createTask'}>
            <button>Creer Task</button>
          </Link>
            <button className='add-button'>Install</button>
          {/* <h2>{JSON.stringify(state)}</h2> */}
          {(state.factures) && state.factures.map((element, index) => (

          <div key={index} style={{justifyContent:'end'}} className="row form-check mb-3 ">
            <div className="col-md-2 col-sm-2">

            <input className="form-check-input" id="flexChec2" type="checkbox" />
            
            </div>
            <label className="col-md-8 col-sm-7 form-check-label" ><span className="fst-italic pl-1"> {index} {element.description}</span></label>
            <button className='col-md-2 col-sm-3' onClick={()=>{seetaskId(element.id)}}>voir</button>
          </div>
        ))}
    </div>
      </main >



    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          {/* <Image src={} alt="Vercel Logo" width={72} height={16} /> */}
        </span>
      </a>
    </footer>
    </div >
    
  )

}
