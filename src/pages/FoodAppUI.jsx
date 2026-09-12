import "./ProjectDetails.css"

import { useNavigate } from "react-router-dom"

import project2 from "../assets/Project2.png"

function FoodAppUI() {
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
            UI/UX Design
          </p>

          <h1>Food App UI</h1>

          <p className="project-intro">
            A modern food ordering mobile app UI designed in
            Figma with a clean and intuitive user experience.
          </p>

          <div className="project-actions">
          </div>
        </div>
      </section>

      {/* PROJECT PREVIEW */}

      <section className="project-preview-section">
        <div className="project-preview">
          <img
            src={project2}
            alt="Food App UI project preview"
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
              A modern
              <span> food app experience.</span>
            </h2>
          </div>

          <div className="project-about-text">
            <p>
              Food App UI is a mobile food ordering application
              interface designed in Figma.
            </p>

            <p>
              The design focuses on creating a clean, modern, and
              intuitive experience for users while browsing food
              and navigating through the application.
            </p>

            <p>
              The project demonstrates UI/UX design principles,
              visual hierarchy, layout design, and interactive
              prototyping.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}

      <section className="project-tech-section">
        <div className="project-details-container">
          <p className="section-label">
            Tools & Skills
          </p>

          <h2>Designed with.</h2>

          <div className="project-tech-list">
            <span>Figma</span>
            <span>UI/UX</span>
            <span>Prototype</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="project-features-section">
        <div className="project-details-container">
          <p className="section-label">
            Design Focus
          </p>

          <h2>
            What this project demonstrates.
          </h2>

          <div className="project-features-grid">
            <div className="project-feature">
              <span>01</span>

              <h3>Modern Interface</h3>

              <p>
                A clean and visually appealing interface designed
                for a modern food ordering experience.
              </p>
            </div>

            <div className="project-feature">
              <span>02</span>

              <h3>User Experience</h3>

              <p>
                Simple navigation and thoughtful layouts focused
                on creating an intuitive user journey.
              </p>
            </div>

            <div className="project-feature">
              <span>03</span>

              <h3>Prototype</h3>

              <p>
                Interactive prototyping used to demonstrate the
                flow and interactions of the application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN */}

      <section className="project-source-section">
        <div className="project-details-container project-source">
          <p className="section-label">
            Design
          </p>

          <h2>
            Explore the
            <span> design.</span>
          </h2>

          <a
            href="#"
            className="project-source-button"
          >
            Open Figma Design ↗
          </a>
        </div>
      </section>
    </main>
  )
}

export default FoodAppUI