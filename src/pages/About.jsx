import "./About.css"
import profileImg from "../assets/profile.png"

function About() {
  return (
    <section className="about">

      <div className="about-image">
        <img
          src={profileImg}
          alt="Shankar Kumar"
        />
      </div>


      <div className="about-content">

        <p>About Me</p>

        <h2>
          I build digital experiences
          that look good and work well.
        </h2>

        <p>
          I'm a BCA graduate focused on UI/UX design
          and frontend development. I enjoy turning
          ideas and designs into clean, responsive and
          user-friendly web experiences.
        </p>


        <div className="about-details">

          <div>
            <span>Name</span>
            <strong>Shankar Kumar</strong>
          </div>

          <div>
            <span>Education</span>
            <strong>BCA</strong>
          </div>

          <div>
            <span>Focus</span>
            <strong>UI/UX & Frontend</strong>
          </div>

          <div>
            <span>Currently</span>
            <strong>Frontend Development</strong>
          </div>

        </div>


        <a
          href="/Shankar-Kumar-Resume.pdf"
          download
          className="resume-button"
        >
          Download Resume ↓
        </a>

      </div>

    </section>
  )
}

export default About