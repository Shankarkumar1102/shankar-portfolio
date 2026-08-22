import "./Hero.css";

import profileImg from "../assets/Profile.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span>Hello, I'm 👋</span>

        <h1>
          Shankar
          <br />
          <strong>Web Developer</strong>
        </h1>

        <p>
          I build modern, responsive and user-friendly
          websites and web applications.
        </p>

        <div className="hero-buttons">

          {/* Download CV */}
          <a
            href="/Shankar-Kumar-Resume.pdf"
            download="Shankar-Kumar-Resume.pdf"
            className="hero-btn"
          >
            Download CV
          </a>

          {/* Contact Me */}
          <a
            href="/contact"
            className="hero-btn contact-btn"
          >
            Contact Me
          </a>

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