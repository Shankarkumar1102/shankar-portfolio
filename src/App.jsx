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
import HireMe from "./pages/HireMe"
import NotFound from "./pages/NotFound"


function App() {

  return (

    <BrowserRouter>

      {/* Loading Screen */}
      <Loader />


      {/* Navigation */}
      <Navbar />


      {/* Pages */}
      <Routes>

        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/"
          element={
            <>
              <Hero />

              <Reveal>
                <Stats />
              </Reveal>
            </>
          }
        />


        {/* =========================
            PROJECTS
        ========================= */}

        <Route
          path="/projects"
          element={
            <Reveal>
              <Projects />
            </Reveal>
          }
        />


        {/* =========================
            ABOUT
        ========================= */}

        <Route
          path="/about"
          element={
            <Reveal>
              <About />
            </Reveal>
          }
        />


        {/* =========================
            SERVICES
        ========================= */}

        <Route
          path="/services"
          element={
            <Reveal>
              <Services />
            </Reveal>
          }
        />


        {/* =========================
            SKILLS
        ========================= */}

        <Route
          path="/skills"
          element={
            <Reveal>
              <Skills />
            </Reveal>
          }
        />


        {/* =========================
            CONTACT
        ========================= */}

        <Route
          path="/contact"
          element={
            <Reveal>
              <Contact />
            </Reveal>
          }
        />


        {/* =========================
            HIRE ME
        ========================= */}

        <Route
          path="/hire-me"
          element={
            <HireMe />
          }
        />


        {/* =========================
            404
        ========================= */}

        <Route
          path="*"
          element={
            <Reveal>
              <NotFound />
            </Reveal>
          }
        />

      </Routes>


      {/* Footer */}
      <Footer />

    </BrowserRouter>
  )
}

export default App