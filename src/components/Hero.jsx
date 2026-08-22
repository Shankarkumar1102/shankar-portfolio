import "./Hero.css"
import profileImg from "../assets/Profile.png"
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
          <button>Download CV</button>
          <button>Contact Me</button>
        </div>
      </div>

     <div className="hero-image">
  <img
    src={profileImg}
    alt="Shankar Kumar"
  />
</div>

    </section>
  )
}

export default Hero