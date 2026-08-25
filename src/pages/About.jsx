import "./About.css"

function About() {
  return (
    <section className="about-page">

      {/* =========================
          HERO
      ========================= */}

      <div className="about-hero">

        <div className="about-hero-content">

          <p className="about-label">
            ABOUT ME
          </p>

          <h1>
            Frontend Developer
            <br />
            <span>& UI/UX Designer.</span>
          </h1>

          <p className="about-hero-text">
            I design intuitive interfaces and build clean, responsive
            web experiences using modern frontend technologies.
          </p>

          <div className="about-hero-buttons">

            <a
              href="/Shankar-Kumar-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="about-primary-btn"
            >
              View My Resume ↗
            </a>

            <a
              href="/projects"
              className="about-secondary-btn"
            >
              View My Work ↗
            </a>

          </div>

        </div>

        <div className="about-hero-side">

          <div className="availability-dot"></div>

          <span>
            Open to opportunities
          </span>

        </div>

      </div>


      {/* =========================
          PROFESSIONAL SUMMARY
      ========================= */}

      <div className="about-section">

        <div className="about-section-label">
          <span>01</span>
          PROFILE
        </div>

        <div className="profile-layout">

          <div className="profile-heading">

            <h2>
              Turning ideas into
              <span> digital experiences.</span>
            </h2>

          </div>

          <div className="profile-content">

            <p>
              I'm Shankar Kumar, a BCA graduate and Frontend Developer
              with a strong interest in UI/UX design. I enjoy combining
              design thinking with frontend development to create
              websites that are visually clean, responsive and easy to use.
            </p>

            <p>
              My work focuses on translating ideas and designs into
              functional web interfaces using modern frontend
              technologies. I pay attention to responsive layouts,
              usability, performance and clean code.
            </p>

            <p>
              I'm currently looking for opportunities where I can
              contribute to real-world projects, continue learning
              and grow as a professional developer.
            </p>

          </div>

        </div>

      </div>


      {/* =========================
          CORE SKILLS
      ========================= */}

      <div className="about-section skills-section">

        <div className="about-section-label">
          <span>02</span>
          CORE SKILLS
        </div>

        <div className="skills-grid">

          <div className="skill-card">

            <span>01</span>

            <h3>
              Frontend Development
            </h3>

            <p>
              Building responsive and interactive web interfaces
              with modern frontend technologies.
            </p>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>SCSS</span>
            </div>

          </div>


          <div className="skill-card">

            <span>02</span>

            <h3>
              UI/UX Design
            </h3>

            <p>
              Designing clean, intuitive and user-focused digital
              experiences from concept to prototype.
            </p>

            <div className="skill-tags">
              <span>Figma</span>
              <span>Wireframes</span>
              <span>Prototyping</span>
              <span>UI Design</span>
            </div>

          </div>


          <div className="skill-card">

            <span>03</span>

            <h3>
              Development Tools
            </h3>

            <p>
              Using modern development and version-control tools
              to build and manage projects efficiently.
            </p>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>

          </div>


          <div className="skill-card">

            <span>04</span>

            <h3>
              Database
            </h3>

            <p>
              Working with NoSQL databases and learning backend
              development for full-stack applications.
            </p>

            <div className="skill-tags">
              <span>MongoDB</span>
            </div>

          </div>

        </div>

      </div>


      {/* =========================
          EXPERIENCE
      ========================= */}

      <div className="about-section">

        <div className="about-section-label">
          <span>03</span>
          EXPERIENCE
        </div>

        <div className="experience-card">

          <div className="experience-number">
            01
          </div>

          <div className="experience-main">

            <div className="experience-top">

              <div>

                <p>
                  CURRENT INTERNSHIP
                </p>

                <h2>
                  WBILD
                </h2>

                <span>
                  Digital Marketing / Web-related Internship
                </span>

              </div>

              <strong>
                6 Months
              </strong>

            </div>

            <div className="experience-line"></div>

            <p className="experience-description">
              Currently gaining professional industry experience
              through a 6-month internship in a digital-marketing-focused
              environment, while developing practical experience in
              web-related work and professional workflows.
            </p>

          </div>

        </div>

      </div>


      {/* =========================
          CURRENTLY LEARNING
      ========================= */}

      <div className="learning-card">

        <div>

          <p>
            CURRENTLY LEARNING
          </p>

          <h2>
            Moving towards Full-Stack Development.
          </h2>

          <span>
            Expanding my frontend knowledge into backend development
            and full-stack JavaScript applications.
          </span>

        </div>

        <div className="learning-stack">

          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>MERN</span>

        </div>

      </div>


      {/* =========================
          EDUCATION
      ========================= */}

      <div className="about-section">

        <div className="about-section-label">
          <span>04</span>
          EDUCATION
        </div>

        <div className="education-card">

          <div>

            <p>
              BACHELOR OF COMPUTER APPLICATIONS
            </p>

            <h2>
              BCA
            </h2>

            <span>
              Sarala Birla University
            </span>

          </div>

          <strong>
            2025
          </strong>

        </div>

      </div>


      {/* =========================
          WHAT I BRING
      ========================= */}

      <div className="about-section">

        <div className="about-section-label">
          <span>05</span>
          WHAT I BRING
        </div>

        <div className="value-grid">

          <div>
            <span>01</span>

            <h3>
              Design Thinking
            </h3>

            <p>
              I focus on usability, visual hierarchy and creating
              interfaces that feel natural to use.
            </p>
          </div>


          <div>
            <span>02</span>

            <h3>
              Clean Development
            </h3>

            <p>
              I aim to write organized, maintainable and responsive
              frontend code.
            </p>
          </div>


          <div>
            <span>03</span>

            <h3>
              Continuous Learning
            </h3>

            <p>
              I continuously explore new technologies and improve
              my development skills through practical projects.
            </p>
          </div>

        </div>

      </div>


      {/* =========================
          RESUME CTA
      ========================= */}

      <div className="about-cta">

        <div>

          <p>
            LET'S WORK TOGETHER
          </p>

          <h2>
            Have an opportunity
            <br />
            <span>for me?</span>
          </h2>

          <span className="cta-description">
            I'm interested in frontend development, UI/UX design
            and web development opportunities.
          </span>

        </div>

        <div className="cta-buttons">

          <a
            href="/Shankar-Kumar-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="cta-primary"
          >
            View My Resume ↗
          </a>

        </div>

      </div>

    </section>
  )
}

export default About