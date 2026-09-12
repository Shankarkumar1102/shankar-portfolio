import "./Projects.css"
import ProjectCard from "../components/ProjectCard"

import project1 from "../assets/Project1.png"
import project2 from "../assets/Project2.png"
import project3 from "../assets/Project3.png"
import project4 from "../assets/Project4.png"

const projects = [
  {
    title: "Spice Heaven",
    category: "Web Development",
    description:
      "A responsive food website built with modern frontend technologies, featuring a clean interface, food-focused layouts, and a user-friendly browsing experience.",
    image: project1,
    tech: ["HTML", "CSS", "JavaScript"],
    link: "/projects/spice-heaven",
    github: "https://github.com/Shankarkumar1102/restaurant-web-page",
  },

  {
    title: "Food App UI",
    category: "UI/UX Design",
    description:
      "A modern food ordering mobile app UI designed in Figma with a clean visual system, intuitive layouts, and a smooth user experience.",
    image: project2,
    tech: ["Figma", "UI/UX", "Prototype"],
    link: "/projects/food-app-ui",
  },

  {
    title: "Portfolio Website",
    category: "Frontend Development",
    description:
      "A responsive personal portfolio website built with React, showcasing projects, skills, services, and a modern interactive user interface.",
    image: project3,
    tech: ["React", "JavaScript", "CSS"],
    link: "/projects/portfolio",
    github: "https://github.com/Shankarkumar1102/shankar-portfolio",
  },

  {
    title: "Shankar Book Store",
    category: "Full Stack Development",
    description:
      "A modern, responsive stationery e-commerce website featuring product categories, search, shopping cart, checkout, local delivery support, and an admin panel.",
    image: project4,
    tech: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "/projects/shankar-book-store",
    github: "https://github.com/Shankarkumar1102/shankar-book-store",
    live: "https://shankar-book-store.vercel.app/",
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <p>SELECTED WORK</p>

        <h2>
          My <span>Projects</span>
        </h2>

        <span>
          A selection of projects showcasing my skills in development,
          design, and modern web technologies.
        </span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects