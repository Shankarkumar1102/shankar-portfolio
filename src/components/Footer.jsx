import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

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


        <div className="footer-navigation">

          <h4>Navigation</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>

        </div>


        <div className="footer-social">

          <h4>Connect</h4>

          <a
            href="YOUR_GITHUB_LINK"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="YOUR_BEHANCE_LINK"
            target="_blank"
            rel="noreferrer"
          >
            Behance ↗
          </a>

        </div>

      </div>


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