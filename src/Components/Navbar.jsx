import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary mb-100 ">
  <div className="container">
    <p className="navbar-brand mb-3 h1">Chinmay</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <p className="nav-link active" aria-current="page" >Education</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" href="#">Thechnologies</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" href="#">Project</p>
        </li>
        <li className="nav-item">
          <p className="nav-link disabled" aria-disabled="true">Contact</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
