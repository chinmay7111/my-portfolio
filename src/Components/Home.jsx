import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../Styles/Home.css"
import resume from "../Images/Chinmay_Ingle_9307247310.pdf"
import chinmay_img from "../Images/chinmay.png"

function Home() {
  let link = "https://wa.me/919307247310?text= hey chinmay want to chat with u.."
  return (
    <div className='container-fluid bg-light text-dark  '>
      <div className='edu_info'>
        <div className='text-center'>
          <div className="head_img"><h2>Hey, I'am <span className='text-danger fs-1'>C</span>hinmay</h2>
          <div className="myimg"><img  id="pimg"src={chinmay_img} alt="" /></div></div>
          <div className='txt'>
            <p className='text-center'>👋 Hello there! I'm Chinmay Ingle, a passionate and forward-thinking 23-year-old with a solid background in Computer Applications.
              <p className='text-center '>🌐 On this virtual space, I invite you to explore my portfolio and witness the intersection of creativity and functionality. From concept to code, each project reflects my dedication to pushing the boundaries of what's possible in the digital realm.

                🌟 Join me on this exciting journey of exploration, innovation, and growth. Let's build the future together, one React component at a time!</p>
            </p>
          </div>
          <div className="m-5 p-2">
            <a href={resume} download className='btn btn-outline-danger p-10 m-2' target='_blank' rel="noreferrer" >Resume</a>
            <a href={link} className='btn btn-danger'>Connect</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
