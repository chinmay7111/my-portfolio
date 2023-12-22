import React from 'react'
import "bootstrap/dist/css/bootstrap.css.map"
import "../Styles/Education.css"
import { hover } from '@testing-library/user-event/dist/hover'

function Education() {
  return (
    <>
       <h1 className='text-center mt-4'>Education</h1>
    <div className="container-fluid text-balck ">
     
     <table class="table table-success  table-striped border border-5">
  <thead>
    <tr>
      <th scope="col">Degree</th>
      <th scope="col">Collage/University</th>
      <th scope="col">Percentage</th>
      <th scope="col">Pass Out Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MCA</th>
      <td>Dr. D Y Patil, Pune</td>
      <td>82.43%</td>
      <td>2023</td>
    </tr>
    <tr>
      <th scope="row">BCA</th>
      <td>S K C, Akola</td>
      <td>70.79%</td>
      <td>2021</td>
    </tr>
    <tr>
      <th scope="row">HSC</th>
      <td >Shri Shivaji Collage,Akola</td>
      <td >60.31%</td>
      <td>2018</td>
    </tr>
    <tr>
      <th scope="row">SSC</th>
      <td >B.K.V, Akola</td>
      <td >73%</td>
      <td>2016</td>
    </tr>
  </tbody>
</table> 
</div>
    </>
  )
}

export default Education
