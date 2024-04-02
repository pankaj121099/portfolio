/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: " Crud  App",
      img: "/projects/crud.png",
      gLink: "https://github.com/pankaj121099",
      lLink: "https://me-hafiz.netlify.app/",
      theory:" A CRUD app refers to an application that performs the four basic functions of persistent storage: Create, Read, Update, and Delete.",
    },
    {
      title: "Portfolio",
      img: "/projects/portfolio.jpg",
      gLink: "https://github.com/pankaj121099",
      lLink: "https://me-hafiz.netlify.app/",
      theory:"A portfolio is a collection of assets held by an individual or entity.",
    },
    {
      title: "To do List",
      img: "/projects/todo.jpg",
      gLink: "https://github.com/pankaj121099",
      lLink: "https://me-hafiz.netlify.app/",
      theory:" Theory: To-do lists aid organization by prioritizing tasks, tracking progress, and increasing productivity through structured planning. "
    },
    {
      title: "Timer",
      img: "/projects/timer.webp",
      gLink: "https://github.com/pankaj121099",
      lLink: "https://www.linkedin.com/in/pankaj-kumar-225ab3232/",
      theory:" Timer theory revolves around the concept of using timers as a tool for productivity, focus, and time management."
    },
    {
      title: "calculator",
      img: "/projects/do.png",
      gLink: "https://github.com/pankaj121099",
      lLink: "https://www.linkedin.com/in/pankaj-kumar-225ab3232/",
      theory:"  Calculators perform mathematical operations using algorithms and circuits, providing accurate results based on inputs."

    },
    {
      title: "Password generator",
      img: "/projects/d.jpg",
      gLink: "https://github.com/pankaj121099",
      lLink: "https://www.linkedin.com/in/pankaj-kumar-225ab3232/",
      theory:" Generator: Creates complex passwords, enhancing security by combining random cha==racters, numbers, and symbols for protection."
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3> our Projects</h3>
          <a
            href="https://github.com/pankaj121099"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (  
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title}/>
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                  {project.theory}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
