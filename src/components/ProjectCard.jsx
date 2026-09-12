import "./ProjectCard.css"

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-image-wrapper">
        <img
          className="project-card-image"
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="project-card-content">

        <p className="project-card-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p className="project-card-description">
          {project.description}
        </p>

        <div className="project-tech">
          {project.tech?.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            View Details ↗
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Website ↗
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}

        </div>

      </div>

    </article>
  )
}

export default ProjectCard