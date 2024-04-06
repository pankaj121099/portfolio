/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import images from '../components/image/images.jpg';
function Banner() {
 const resume= "http://localhost:3000/yadav.pdf";
   const cv= (url)=>{
    const filname= url.split("/").pop();
     const aTag= document.createElement('a') ;
     aTag.href= url ;
     aTag.setAttribute('download' ,filname);
     document.body.appendChild(aTag);
     aTag.click();
     aTag.remove();
   };

  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src={images} alt="banner" style={{height:'400px', width:'400px' }} />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm  Pankaj Kumar</h6>
            <h3> Front end Developer</h3>
            <p>
            Innovative and detail-oriented Fresher Front End Developer with a passion for creating responsive and user-friendly websites.
             Skilled in collaborating with back-end developers,
             utilizing version control systems, and staying up-to-date on emerging technologies.
            </p>
             <a href="#" className="btn" onClick={()=>{cv(resume)}}> 
             <i class="fa-solid fa-download"></i> &nbsp;
                RESUME
             </a>
             </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
