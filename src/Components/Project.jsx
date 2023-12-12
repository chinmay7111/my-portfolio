import React from 'react'
import "bootstrap/dist/css/bootstrap.css.map"
import "../Styles/Project.css"
import img1 from "../Images/ecommerce.jpeg"
import img2 from "../Images/Todolist.jpeg"
import img3 from "../Images/portfoliojpeg.jpeg"

function Project() {
 
  return (
    <><h1 className='text-center mt-2'>Projects</h1>
      <div className='container-fluid  '>
        
      <div className=" d-flex align-item-center  justify-content-center ">
      <div class="card " >
  <img className='img-hover' src={img1} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Project Name : Watch-Mart</h5>
    <p class="card-text">Watch-Mart is an Ecommerce web application.... </p>
    <p href="#" class="btn btn-outline-primary">Click to see more..</p>
  </div>
</div>
      <div class="card" >
  <img className='img-hover'src={img3} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Project Name : Portfolio</h5>
    <p class="card-text">This is My Portfolio Application built on React js .... </p>
    <p href="#" class="btn btn-outline-info">Click to see more..</p>
  </div>
</div>
      <div class="card" >
  <img className='img-hover'src={img2} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Project Name : ToDO List</h5>
    <p class="card-text">This is ToDO List app you can view it .... </p>
    <p href="#" class="btn btn-outline-dark">Click to see more..</p>
  </div>
</div>
</div>
        </div> 
    </>
  )
}

export default Project
