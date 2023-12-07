import React from 'react'
import "bootstrap/dist/css/bootstrap.css.map"
import "../Styles/Technologies.css"
function Technologies() {
  return (<>
  <h1 className='text-center mt-4'>Technologies</h1>
    <div  className='container-fluid  text-black text-center'>
      <div className=''>
      
      <div className="technology  d-flex align-item-center justify-content-center my-5" >
        <div className='tech_name '>
        <i class="fa-brands fa-html5 "></i>
        </div> <div className='hide mt-4'><h1 className='text-center'>HTML</h1></div>
        <div className='tech_name'>
        <i class="fa-brands fa-css3-alt"></i>
        </div><div className='hide mt-4'><h1 className='text-center'>CSS</h1></div>
        <div className='tech_name'>
        <i class="fa-brands fa-js"></i>
        </div><div className='hide mt-4'><h1 className='text-center'>Java Script</h1></div>
        <div className='tech_name'>
        <i class="fa-brands fa-java"></i>
        </div> <div className='hide mt-4'><h1 className='text-center'>Java</h1></div>
      </div>
      <div className="technology  d-flex align-item-center justify-content-center my-5">
        <div className='tech_name '>
        <i class="fa-brands fa-react "></i>
        </div><div className='hide mt-4'><h1 className='text-center'>React</h1></div>
        <div className='tech_name'>
        <i class="fa-brands fa-bootstrap"></i>
        </div><div className='hide mt-4'><h1 className='text-center'>BootStrap</h1></div>
        <div className='tech_name'>
        <i class="fa-brands fa-node"></i>
        </div><div className='hide mt-4'><h1 className='text-center'>Node </h1></div>
        <div className='tech_name'>
        <i class="fa-brands fa-github"></i>
        </div><div className='hide mt-4'><h1 className='text-center'>Git Hub</h1></div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Technologies
