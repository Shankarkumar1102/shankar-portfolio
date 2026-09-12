import "./ProjectDetails.css"

import { useNavigate } from "react-router-dom"

import project1 from "../assets/Project1.png"

function SpiceHeaven() {
  const navigate = useNavigate()

  const backToProjects = () => {
    navigate("/")
    
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      })
    }, 100)
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
            Web Development
          </p>

          <h1>Spice Heaven</h1>

          <p className="project-intro">
            A fully-functional restaurant web application that
            simulates a complete restaurant dining experience.
          </p>

          <div className="project-actions">
            <a
              href="https://github.com/Shankarkumar1102/restaurant-web-page"
              target="_blank"
              rel="noopener noreferrer"
              className="project-primary-button"
            >
              View Source Code ↗
            </a>

            <a
              href="https://github.com/Shankarkumar1102/restaurant-web-page"
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
            src={project1}
            alt="Spice Heaven project preview"
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
              A complete
              <span> restaurant experience.</span>
            </h2>
          </div>

          <div className="project-about-text">
            <p>
              Spice Heaven is a fully-functional restaurant web
              application created to simulate a complete dining
              experience.
            </p>

            <p>
              The project focuses on creating an intuitive and
              professional user interface where customers can
              browse menus, place orders, and manage their dining
              experience.
            </p>

            <p>
              The application was built using pure HTML, CSS, and
              JavaScript while focusing on modern web development
              techniques and responsive design.
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
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
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

              <h3>Restaurant Interface</h3>

              <p>
                A professional interface designed around a
                complete restaurant dining experience.
              </p>
            </div>

            <div className="project-feature">
              <span>02</span>

              <h3>Menu & Ordering</h3>

              <p>
                Customers can browse menus, place orders, and
                interact with the restaurant experience.
              </p>
            </div>

            <div className="project-feature">
              <span>03</span>

              <h3>Responsive Design</h3>

              <p>
                The website is designed to provide a smooth
                experience across different screen sizes.
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
              href="https://github.com/Shankarkumar1102/restaurant-web-page"
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

export default SpiceHeaven