import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        SHANKAR.
      </Link>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
  Home
</NavLink>

<NavLink to="/about" onClick={() => setMenuOpen(false)}>
  About
</NavLink>

<NavLink to="/services" onClick={() => setMenuOpen(false)}>
  Services
</NavLink>

<NavLink to="/projects" onClick={() => setMenuOpen(false)}>
  Projects
</NavLink>

<NavLink to="/skills" onClick={() => setMenuOpen(false)}>
  Skills
</NavLink>

<NavLink to="/contact" onClick={() => setMenuOpen(false)}>
  Contact
</NavLink>

        <button className="navbar-btn">
          Hire Me
        </button>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

    </nav>
  )
}

export default Navbar