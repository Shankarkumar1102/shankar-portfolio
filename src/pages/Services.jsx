import "./Services.css"
import ServiceCard from "../components/ServiceCard"


const services = [
  {
    number: "01",

    title: "UI/UX Design",

    description:
      "Creating clean, intuitive and user-focused interfaces with strong visual clarity, thoughtful layouts, and seamless user experiences.",
  },

  {
    number: "02",

    title: "Full Stack Development",

    description:
      "Building modern full-stack web applications using AI-assisted development with hands-on customization, debugging, testing, and implementation.",
  },

  {
    number: "03",

    title: "AI-Assisted Development",

    description:
      "Leveraging AI tools to accelerate development, solve coding challenges, and build practical web solutions through customization and testing.",
  },
]


function Services() {

  return (

    <section className="services">

      {/* =========================
          HEADER
      ========================= */}

      <div className="services-header">

        <p>What I Do</p>

        <h2>
          Bringing ideas to
          <span> digital life.</span>
        </h2>

        <p className="services-description">
          I combine design, development, and AI-assisted workflows
          to build modern, responsive, and meaningful digital experiences.
        </p>

      </div>


      {/* =========================
          SERVICES
      ========================= */}

      <div className="services-grid">

        {services.map((service) => (

          <ServiceCard
            key={service.number}
            service={service}
          />

        ))}

      </div>

    </section>

  )
}


export default Services