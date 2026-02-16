import React from "react"

const projects = [
  {
    title: "E-commerce Website",
    description: "Online store b React",
    link: "https://yousseflab20-ui.github.io/project1"
  },
  {
    title: "Portfolio",
    description: "My personal portfolio",
    link: "https://yousseflab20-ui.github.io/project1"
  }
]

function Projects() {
  return (
    <section id="projects" className="py-16 px-8">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
