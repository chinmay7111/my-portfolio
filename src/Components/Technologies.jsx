import React from 'react'
import "bootstrap/dist/css/bootstrap.css.map"
import "../Styles/Technologies.css"
function Technologies() {
  return (
    <div  className='container-fluid bg-dark text-white text-center'>
      <div className=''>
      <h1>Technologies</h1>
      <div className="technology " >
        <div className='tech_name '>
        <i class="fa-brands fa-html5 "></i>
        </div>
        <div className='tech_name'>
        <i class="fa-brands fa-css3-alt"></i>
        </div>
        <div className='tech_name'>
        <i class="fa-brands fa-js"></i>
        </div>
        <div className='tech_name'>
        <i class="fa-brands fa-java"></i>
        </div>
      </div>
      <div className="technology">
        <div className='tech_name '>
        <i class="fa-brands fa-react "></i>
        </div>
        <div className='tech_name'>
        <i class="fa-brands fa-bootstrap"></i>
        </div>
        <div className='tech_name'>
        <i class="fa-brands fa-node"></i>
        </div>
        <div className='tech_name'>
        <i class="fa-brands fa-github"></i>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Technologies
