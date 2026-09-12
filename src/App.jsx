import "./App.css"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"

import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Footer from "./components/Footer"
import Reveal from "./components/Reveal"
import Loader from "./components/Loader"

import Projects from "./pages/Projects"
import About from "./pages/About"
import Services from "./pages/Services"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"

import SpiceHeaven from "./pages/SpiceHeaven"
import FoodAppUI from "./pages/FoodAppUI"
import PortfolioProject from "./pages/PortfolioProject"


function Home() {
  return (
    <>
      {/* Loading Screen */}
      <Loader />

      {/* Navigation */}
      <Navbar />

      {/* =========================
          HOME
      ========================= */}

      <main>
        <section id="home">
          <Hero />
        </section>

        {/* =========================
            STATS
        ========================= */}

        <section id="stats">
          <Reveal>
            <Stats />
          </Reveal>
        </section>

        {/* =========================
            ABOUT
        ========================= */}

        <section id="about">
          <Reveal>
            <About />
          </Reveal>
        </section>

        {/* =========================
            SERVICES
        ========================= */}

        <section id="services">
          <Reveal>
            <Services />
          </Reveal>
        </section>

        {/* =========================
            PROJECTS
        ========================= */}

        <section id="projects">
          <Reveal>
            <Projects />
          </Reveal>
        </section>

        {/* =========================
            SKILLS
        ========================= */}

        <section id="skills">
          <Reveal>
            <Skills />
          </Reveal>
        </section>

        {/* =========================
            CONTACT
        ========================= */}

        <section id="contact">
          <Reveal>
            <Contact />
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Portfolio */}
        <Route path="/" element={<Home />} />

        {/* Project Detail Pages */}
        <Route
          path="/projects/spice-heaven"
          element={<SpiceHeaven />}
        />

        <Route
          path="/projects/food-app-ui"
          element={<FoodAppUI />}
        />

        <Route
          path="/projects/portfolio"
          element={<PortfolioProject />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App