import "./ServiceCard.css"

function ServiceCard({ service }) {
  return (
    <article className="service-card">

      <div className="service-top">
        <span>{service.number}</span>

        <span className="service-arrow">
          ↗
        </span>
      </div>

      <div className="service-content">

        <h3>{service.title}</h3>

        <p>{service.description}</p>

      </div>

    </article>
  )
}

export default ServiceCard