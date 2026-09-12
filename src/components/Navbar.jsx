import { useState } from "react"
import "./Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      {/* Logo */}
      <button
        className="navbar-logo"
        onClick={() => scrollToSection("home")}
      >
        SHANKAR.
      </button>


      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>

        <button
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("about")}
        >
          About
        </button>

        <button
          onClick={() => scrollToSection("services")}
        >
          Services
        </button>

        <button
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>

        <button
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </button>

        <button
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>

      </div>


      {/* Mobile Menu Button */}
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