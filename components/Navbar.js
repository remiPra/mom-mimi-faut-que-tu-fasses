import React from 'react'
import Link from 'next/dist/client/link'
function Navbar() {
  return (
    <div>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">rémi </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link href={'/'} passHref={true}>
        <a className="p-2 text-dark">Home</a>
        </Link>
        <Link href={'/createTask'} passHref={true}>
        <a className="p-2 text-dark" href="#">Taches</a>
        </Link>
        <Link href={'/createTask'} passHref={true}>
        <a className="p-2 text-dark" href="#">Factures</a>
        </Link>
        <Link href={'/'} passHref={true}>
        <a className="p-2 text-dark" href="#">Creer</a>
        </Link>
        
      </nav>
      <a className="btn btn-outline-primary" href="#">Sign up</a>
    </div>
    </div>
  )
}

export default Navbar