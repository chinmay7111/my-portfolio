import React from 'react'
import "bootstrap/dist/css/bootstrap.css.map"


function Footer() {
  return (
    < >
      <div className="container-fluid text-black   ">
         <div className=' container d-flex aligin-items-center justify-content-center '>
        <p><span className='text-danger '>Contact:</span> chinmayingle62@gmail.com</p>
        </div>
      <div className="container d-flex align-items-center justify-content-center   ">
      <div className='fs-1 p-4'>
          <a href="https://github.com/chinmay7111" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github  text-dark "></i>
          </a>
        </div>
        <div className='fs-1 p-4'>
          <a href="https://www.linkedin.com/in/chinmay-ingle-aa479b211" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-dark "></i>
          </a>
        </div>
        <div className='fs-1 p-4'>
          <a href="https://www.instagram.com/chinmay._7/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-dark "></i>
          </a>
        </div>
        <div className='fs-1 p-4'>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope-o text-dark "></i>
          </a>
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer
