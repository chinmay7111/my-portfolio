import React from 'react'
import "bootstrap/dist/css/bootstrap.css.map"
import error_img from "../Images/404.gif"
function Error() {
  return (
    <div className='conatiner' >
      <img src={error_img} alt=""  style={{width :"100%" , height:"100%"}} />
    </div>
  )
}

export default Error
