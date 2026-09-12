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
import ShankarBookStore from "./pages/ShankarBookStore"


function Home() {
  return (
    <>
      <Loader />

      <Navbar />

      <main>

        <section id="home">
          <Hero />
        </section>

        <section id="stats">
          <Reveal>
            <Stats />
          </Reveal>
        </section>

        <section id="about">
          <Reveal>
            <About />
          </Reveal>
        </section>

        <section id="services">
          <Reveal>
            <Services />
          </Reveal>
        </section>

        <section id="projects">
          <Reveal>
            <Projects />
          </Reveal>
        </section>

        <section id="skills">
          <Reveal>
            <Skills />
          </Reveal>
        </section>

        <section id="contact">
          <Reveal>
            <Contact />
          </Reveal>
        </section>

      </main>

      <Footer />
    </>
  )
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* PROJECT DETAILS */}
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

        <Route
          path="/projects/shankar-book-store"
          element={<ShankarBookStore />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App