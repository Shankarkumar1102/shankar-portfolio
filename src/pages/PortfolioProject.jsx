import "./ProjectDetails.css"

import project3 from "../assets/Project3.png"

function PortfolioProject() {
  const backToProjects = () => {
    window.location.href = "/#projects"
  }

  return (
    <main className="project-details-page">
      {/* HERO */}

      <section className="project-details-hero">
        <div className="project-details-container">
          <button
            className="project-back-button"
            onClick={backToProjects}
          >
            ← Back to Projects
          </button>

          <p className="project-category">
            Personal Portfolio
          </p>

          <h1>Portfolio Website</h1>

          <p className="project-intro">
            A responsive personal portfolio website built with
            React to showcase projects, skills, services, and
            professional work.
          </p>

          <div className="project-actions">
            <a
              href="https://github.com/Shankarkumar1102/shankar-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="project-primary-button"
            >
              View Source Code ↗
            </a>

            <a
              href="https://github.com/Shankarkumar1102/shankar-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="project-secondary-button"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT PREVIEW */}

      <section className="project-preview-section">
        <div className="project-preview">
          <img
            src={project3}
            alt="Portfolio website project preview"
          />
        </div>
      </section>

      {/* ABOUT */}

      <section className="project-about-section">
        <div className="project-details-container project-about-grid">
          <div>
            <p className="section-label">
              About The Project
            </p>

            <h2>
              A personal
              <span> digital portfolio.</span>
            </h2>
          </div>

          <div className="project-about-text">
            <p>
              This portfolio website was created to showcase my
              development skills, UI/UX work, projects, services,
              and professional experience.
            </p>

            <p>
              The website focuses on a clean, modern, and
              responsive interface with smooth navigation and
              interactive sections.
            </p>

            <p>
              The project demonstrates frontend development using
              React, JavaScript, CSS, and modern component-based
              development practices.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}

      <section className="project-tech-section">
        <div className="project-details-container">
          <p className="section-label">
            Technologies
          </p>

          <h2>Built with.</h2>

          <div className="project-tech-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="project-features-section">
        <div className="project-details-container">
          <p className="section-label">
            Project Focus
          </p>

          <h2>
            What this project demonstrates.
          </h2>

          <div className="project-features-grid">
            <div className="project-feature">
              <span>01</span>

              <h3>Responsive Design</h3>

              <p>
                A responsive layout designed to work across
                desktop, tablet, and mobile devices.
              </p>
            </div>

            <div className="project-feature">
              <span>02</span>

              <h3>React Development</h3>

              <p>
                Component-based development using React and
                reusable UI components.
              </p>
            </div>

            <div className="project-feature">
              <span>03</span>

              <h3>Modern UI</h3>

              <p>
                A clean and professional interface focused on
                usability, typography, spacing, and visual design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOURCE CODE */}

      <section className="project-source-section">
        <div className="project-details-container project-source">

          <h2>
            Explore the
            <span> project.</span>
          </h2>

          <div className="project-actions">

            <a
              href="https://github.com/Shankarkumar1102/shankar-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="project-secondary-button"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PortfolioProject