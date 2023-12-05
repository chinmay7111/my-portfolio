import React from 'react'
import "bootstrap/dist/css/bootstrap.css.map"
import "../Styles/Project.css"
import img1 from "../Images/ecommerce.jpeg"
function Project() {
 
  return (
    <>
      <div className='container-fluid bg-dark text-white bg-opacity-75  '>
        <h1 className='text-center m-5'>Projects</h1>
      <div className="projects_name">
      <div class="card" >
  <img src={img1} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Project Name : Watch-Mart</h5>
    <p class="card-text">Watch-Mart is an Ecommerce web application </p>
    <p href="#" class="btn btn-outline-primary">Click to see more..</p>
  </div>
</div>
      <div class="card" >
  <img src={img1} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Project Name : Portfolio</h5>
    <p class="card-text">Watch-Mart is an Ecommerce web application </p>
    <p href="#" class="btn btn-outline-primary">Click to see more..</p>
  </div>
</div>
      <div class="card" >
  <img src={img1} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Project Name : ToDO List</h5>
    <p class="card-text">Watch-Mart is an Ecommerce web application </p>
    <p href="#" class="btn btn-outline-primary">Click to see more..</p>
  </div>
</div>
</div>
        </div> 
    </>
  )
}

export default Project
