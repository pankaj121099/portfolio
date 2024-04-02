/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
   
function Footer() {
  return (
    <footer >
      <div className="container" id="footer"  >
        <div className="row" style={{ textAlign:'center' }}>
        <div className="col-sm-12 "   >
        <span className="logo">Pankaj Kumar </span>
        <p>frontend Developer | JavaScript Developer</p>
        <p> 6393204323 </p>
         <p>py6393@gmail.com </p>
       
        <div className="links">
          <a href="#">
            <i className="fa-brands fa-linkedin"></i> 
          </a>
          <a href="#">
          <i class="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
          <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Pankaj Kumar
         
        </p>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
