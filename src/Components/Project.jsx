import React from "react";
import "bootstrap/dist/css/bootstrap.css.map";
import "../Styles/Project.css";
import img1 from "../Images/ecommerce.jpeg";
import img2 from "../Images/Todolist.jpeg";
import img3 from "../Images/portfoliojpeg.jpeg";

function Project() {
  const projectDetails = [
    {
      pname: "Watch-Mart",
      pinfo: "Watch-Mart is an Ecommerce web application....",
      img: img1,
    },
    {
      pname: "Project Name : Portfolio",
      pinfo: "It's My Portfolio Application built on React js ...",
      img: img2,
    },
    {
      pname: "ToDO List",
      pinfo: "This is ToDO List app you can view it .... ",
      img: img3,
    },
  ];

  return (
    <>
      <h1 className="text-center mt-2">Projects</h1>
      <div className="container-project  ">
      {projectDetails.map((e) => {
        return (
         
            <div class="card ">
              <img
                className="img-hover"
                src={e.img}
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Project Name : {e.pname}</h5>
                <p class="card-text">{e.pinfo} </p>
                <p href="#" class="btn btn-outline-primary">
                  Click to see more..
                </p>
              </div>
            </div>
         
        );
      })}
       </div>
    </>
  );
}

export default Project;
