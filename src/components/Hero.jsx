import "./Hero.css";

import profileImg from "../assets/Profile.png";

function Hero() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (

    <section className="hero">

      <div className="hero-content">

        <span>Hello, I'm 👋</span>

        <h1>
          SHANKAR
          <br />
          <strong>Web Developer</strong>
        </h1>

        <p>
          I design and build modern digital experiences that combine thoughtful UI/UX design with clean, responsive, and high-performance frontend development.
        </p>

        <div className="hero-buttons">

          <button
            type="button"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </button>

        </div>

      </div>

      <div className="hero-image">

        <img
          src={profileImg}
          alt="Shankar Kumar"
        />

      </div>

    </section>
  );
}

export default Hero;