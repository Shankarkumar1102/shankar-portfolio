import "./HireMe.css"

function HireMe() {
  return (
    <section className="hire-page">

      {/* HERO */}
      <div className="hire-hero">
        <div className="hire-hero-content">

          <p className="hire-label">
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            Let's work
            <br />
            <span>together.</span>
          </h1>

          <p className="hire-intro">
            I'm Shankar Kumar, a UI/UX Designer and Frontend
            Developer focused on building modern, responsive
            and user-friendly digital experiences.
          </p>

          <div className="hire-buttons">

            <a
              href="/Shankar-Kumar-Resume.pdf"
              download
              className="hire-primary-btn"
            >
              Download Resume
            </a>

            <a
              href="mailto:shnkarkumar.bca@outlook.com"
              className="hire-secondary-btn"
            >
              Hire Me
            </a>

          </div>
        </div>
      </div>


      {/* PROFILE */}
      <div className="hire-section">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Who I am</h2>
        </div>

        <div className="profile-card">

          <div>
            <h3>Shankar Kumar</h3>

            <p className="profile-role">
              UI/UX Designer & Frontend Developer
            </p>
          </div>

          <p>
            I enjoy designing and developing clean, modern and
            responsive websites. My focus is on creating interfaces
            that look professional while also providing a smooth
            user experience.
          </p>

          <p>
            I have experience working with frontend technologies,
            UI/UX design and personal web projects, and I'm
            continuously improving my skills in modern web
            development.
          </p>

        </div>
      </div>


      {/* SKILLS */}
      <div className="hire-section">

        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>What I work with</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <span>01</span>
            <h3>HTML</h3>
            <p>Semantic and structured web development.</p>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>CSS</h3>
            <p>Responsive layouts, animations and modern styling.</p>
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>JavaScript</h3>
            <p>Interactive and dynamic web experiences.</p>
          </div>

          <div className="skill-card">
            <span>04</span>
            <h3>React</h3>
            <p>Component-based frontend applications.</p>
          </div>

          <div className="skill-card">
            <span>05</span>
            <h3>UI/UX Design</h3>
            <p>User-focused interface and experience design.</p>
          </div>

          <div className="skill-card">
            <span>06</span>
            <h3>Figma</h3>
            <p>Wireframes, UI design and interactive prototypes.</p>
          </div>

          <div className="skill-card">
            <span>07</span>
            <h3>SCSS</h3>
            <p>Organized and scalable CSS architecture.</p>
          </div>

          <div className="skill-card">
            <span>08</span>
            <h3>C++</h3>
            <p>Programming fundamentals and problem solving.</p>
          </div>

          <div className="skill-card">
            <span>09</span>
            <h3>Git & GitHub</h3>
            <p>Version control and project collaboration.</p>
          </div>

          <div className="skill-card">
            <span>10</span>
            <h3>MongoDB</h3>
            <p>Working with NoSQL databases and data.</p>
          </div>

        </div>
      </div>


      {/* CURRENTLY LEARNING */}
      <div className="learning-section">

        <div>
          <p>CURRENTLY LEARNING</p>

          <h2>
            Node.js & MERN Stack
          </h2>

          <span>
            Expanding my frontend knowledge into backend
            development and full-stack JavaScript applications.
          </span>
        </div>

        <div className="learning-badge">
          Learning
        </div>

      </div>


      {/* EXPERIENCE */}
      <div className="hire-section">

        <div className="section-heading">
          <p>EXPERIENCE</p>
          <h2>My current internship</h2>
        </div>

        <div className="experience-card">

          <div className="experience-top">

            <div>

              <span className="experience-label">
                CURRENT INTERNSHIP
              </span>

              <h3>WBILD</h3>

              <p>
                Digital Marketing / Web-related Internship
              </p>

            </div>

            <span className="experience-duration">
              6 Months
            </span>

          </div>

          <p className="experience-description">
            Currently gaining professional experience through
            a 6-month internship, working in a digital marketing
            focused environment and developing practical
            industry experience.
          </p>

        </div>
      </div>


      {/* EDUCATION */}
      <div className="hire-section">

        <div className="section-heading">
          <p>EDUCATION</p>
          <h2>My education</h2>
        </div>

        <div className="education-card">

          <div>

            <span>BCA</span>

            <h3>
              Bachelor of Computer Applications
            </h3>

            <p>
              Sarala Birla University
            </p>

          </div>

          <strong>
            2025
          </strong>

        </div>
      </div>


      {/* CONTACT */}
      <div className="hire-contact-section">

        <div className="contact-heading">

          <p>LET'S CONNECT</p>

          <h2>
            Interested in hiring me?
          </h2>

          <span>
            Feel free to get in touch with me for frontend
            development, UI/UX design or web development
            opportunities.
          </span>

        </div>

        <div className="contact-details">

          <a href="mailto:shnkarkumar.bca@outlook.com">

            <small>EMAIL</small>

            <strong>
              shnkarkumar.bca@outlook.com
            </strong>

          </a>

          <a href="tel:+916239901052">

            <small>PHONE</small>

            <strong>
              +91 6239901052
            </strong>

          </a>

        </div>

      </div>

    </section>
  )
}

export default HireMe