import React from "react";

import { useState, useEffect } from "react";
function Header() {
  const [stickyClass, setStickyClass] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  return (
    <header className={`${stickyClass}`}>
      <div className="header-inner">
        <span className="logo">portfolio</span>
        <div className="links">
          <a className="link" href="#banner">
            Home
          </a>
          <a className="link" href="#services">
          About
          </a>
          <a className="link" href="#experiences">
          my technologies
          </a>
          <a className="link" href="#projects">
            Projects
          </a>
          <a className="link" href="#footer">
             Contact 
          </a>
        </div>
        <span className="menu" onClick={() => setActive(!active)}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
      <div className={`mobile-links ${active ? "active" : ""}`}>
        <a className="link" onClick={() => setActive(!active)} href="#banner">
          Home
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#services">
        About
        </a>
        
        <a
          className="link"
          onClick={() => setActive(!active)}
          href="#experiences"
        >
         my technologies
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#projects">
          Projects
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#footer">
         Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
