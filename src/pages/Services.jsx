import "./Services.css"
import ServiceCard from "../components/ServiceCard"

const services = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "Creating clean, intuitive and user-focused interfaces with strong visual hierarchy and thoughtful user experiences.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Building responsive and modern web interfaces using HTML, CSS, JavaScript and React.",
  },
  {
    number: "03",
    title: "Web Design",
    description:
      "Designing modern, responsive websites that balance aesthetics, usability and performance.",
  },
]

function Services() {
  return (
    <section className="services">

      <div className="services-header">
        <p>What I Do</p>

        <h2>
          Turning ideas into
          <span> digital experiences.</span>
        </h2>

        <p className="services-description">
          I combine design thinking with frontend development
          to create clean and meaningful digital products.
        </p>
      </div>

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