import "./Projects.css"
import ProjectCard from "../components/ProjectCard"
import project1 from "../assets/Project1.png"
import project2 from "../assets/Project2.png"
import project3 from "../assets/Project3.png"

const projects = [
  {
    title: "Spice Heaven",
    category: "Web Development",
    description:
      "A responsive food website built with modern frontend technologies.",
    image: project1,
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
  },

  {
    title: "Food App UI",
    category: "UI/UX Design",
    description:
      "A modern food ordering mobile app designed in Figma.",
    image: project2,
    tech: ["Figma", "UI/UX", "Prototype"],
    link: "#",
    github: "#",
  },

  {
    title: "Portfolio Website",
    category: "Frontend Development",
    description:
      "A responsive personal portfolio built with React.",
    image: project3,
    tech: ["React", "JavaScript", "CSS"],
    link: "#",
    github: "#",
  },
]

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>

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