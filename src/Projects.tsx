import React from "react";

const projects = [
  {
    title: "E-commerce Website",
    description: "Online store b React",
    link: "https://..."
  },
  {
    title: "Portfolio",
    description: "My personal portfolio",
    link: "https://..."
  }
];

function Projects() {
  return (
    <section>
      <h2>My Projects</h2>

      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      ))}

    </section>
  );
}

export default Projects;
