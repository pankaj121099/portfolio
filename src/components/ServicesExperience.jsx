import React, { useState } from "react";
import images from '../components/image/images.jpg';
function ServicesExperience() {
  // const [services] = useState([
  //   {
  //     icon: "fa-paintbrush",
  //     title: "UI Design",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  //     active: false,
  //   },
  //   // {
  //   //   icon: "fa-pen-to-square",
  //   //   title: "Product Design",
  //   //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  //   //   active: true,
  //   // },
  
  // ]);
  return (
    <section className="services-experience">
            <div className="container"id="services" >
              <h2> About </h2>
            <div className="row  ">
            <div className="col-sm-6 " style={{ borderRight:'1px solid smokeWhite' ,height:'300px', background:'#2b2828' , textAlign:'center'}}>
                <h2>Education</h2>
                 <i class="fa-solid fa-calendar"> <span> 2017 - 2020</span></i> 
                <h5> Bachelor of computer Application </h5>
                <p> S.S.PG College Shahjahanpur <br/>  Affiliated:- m.j.p.r.u (Bareilly) </p> 
                <br/>   
                <i class="fa-solid fa-calendar"> <span> 2021 - 2023</span></i> 
                <h5> Master of computer Application </h5>
                <p>Greater Noida institude of Technology (Greater Noida) </p> 
            </div>
            <div className="col-sm-6 "  style={{ height:'300px', background:'#2b2828', textAlign:'center',}}>
                <h2> Experience</h2>
                <h5> web Development (Internship)</h5>
                <h6>Cogentix Systems | Greater Noida <br/>
                  <span> july-2023 to dec-2023 &nbsp;  (6-months)</span></h6> <br/>
                  <h2>Certificate</h2>
                  <ul style={{ listStyle:'none'}}> 
                    <li>Html -udemy</li>
                    <li>css -udemy</li>
                    <li>JavaScript -udemy</li>
                    <li> frontend- ducat</li>
                  </ul>
                  
                </div>
            
         
        </div>
        </div>  
      <div className="container">
        

        {/* <div className="services" id="services">
          {services.map((service, i) => (
            // <div
            //   key={i}
            //   className={`service ${service.active ? "active" : ""}`}
            // >
            // </div>
          ))}
        </div> */}
    {/* // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>MY TECHNOLOGIES</h3>
            {/* <p>Year Experience</p> */}
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>Html5</h4>
              {/* <p>Clients</p> */}
            </div>
            <div className="portfolio">
              <h4>Css</h4>
              {/* <p>Years Experience</p> */}
            </div>
            <div className="portfolio">
              <h4>JavaScript</h4>
              {/* <p>Completed Projects</p> */}
            </div>
            <div className="portfolio">
              <h4>Bootstrap5</h4>
              {/* <p>Achievements</p> */}
            </div>
            <div className="portfolio">
              <h4>J queary</h4>
              {/* <p>Completed Projects</p> */}
            </div>
            <div className="portfolio">
              <h4>React Js</h4>
              {/* <p>Completed Projects</p> */}
            </div>
            <div className="portfolio">
              <h4>C++</h4>
              {/* <p>Completed Projects</p> */}
            </div>
            <div className="portfolio">
              <h4>Tailwind</h4>
              {/* <p>Completed Projects</p> */}
            </div>
          </div>
        </div>
      </div>     
     
    </section>
    
  );
}

export default ServicesExperience;
