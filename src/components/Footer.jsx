import "./Footer.css"

import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            Shankar.
          </Link>

          <p>
            UI/UX Designer & Frontend Developer
            creating clean and meaningful digital
            experiences.
          </p>

        </div>


        {/* NAVIGATION */}
        <div className="footer-navigation">

          <h4>Navigation</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>

        </div>


        {/* SOCIAL */}
        <div className="footer-social">

          <h4>Connect</h4>

  <a
    href="https://github.com/Shankarkumar1102"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/shankarkumaruiux/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a
    href="https://www.behance.net/shankarkumar294"
    target="_blank"
    rel="noreferrer"
  >
    Behance ↗
  </a>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Shankar Kumar. All rights reserved.
        </p>

        <span>
          Designed & Built with React
        </span>

      </div>

    </footer>
  )
}

export default Footer