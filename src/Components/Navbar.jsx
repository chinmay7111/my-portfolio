import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary pb-4 ">
  <div className="container">
    <Link to="/" className="navbar-brand  ">Chinmay</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/education" className="nav-link active" aria-current="page" >Education</Link>
        </li>
        <li className="nav-item">
          <Link to="/technologies" className="nav-link active" >Thechnologies</Link>
        </li>
        <li className="nav-item">
          <Link to="/project" className="nav-link active" >Project</Link>
        </li>
        <li className="nav-item">
          <Link to="/footer" className="nav-link  active" >Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
