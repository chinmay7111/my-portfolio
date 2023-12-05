import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../Styles/Home.css"
import resume from "../Images/Chinmay_Ingle_9307247310.pdf"

function Home() {
  let link ="https://wa.me/919307247310?text= hey chinmay want to chat with u.."
  return (
    <div className='container-fluid bg-dark text-white bg-opacity-75  '>
      <div className='edu_info'>
     <div className='text-center'>
      <h2>Hey Iam <span className='text-danger fs-1'>C</span>hinmay</h2>
      <div className=' text-center'> 
      <p>Looorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quos, hic distinctio possimus consequuntur quod sint porro ut earum autem deserunt doloremque labore aperiam quo aspernatur, ab error suscipit illo alias exercitationem ipsam dignissimos nam! Ipsum rem aliquid corporis. Unde distinctio dolorem inventore delectus exercitationem nesciunt qui suscipit, quisquam dolor in sit facilis possimus culpa necessitatibus ab veniam officia accusantium asperiores tempore voluptate eum, eveniet illum nihil maxime? Voluptatibus beatae velit inventore, corrupti exercitationem voluptate ratione repudiandae laudantium ipsum optio sit accusamus quas adipisci nostrum excepturi, libero vitae deserunt similique reiciendis numquam asperiores? Nam, esse in. Porro asperiores velit ipsum!</p>
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
