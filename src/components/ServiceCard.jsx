import "./ServiceCard.css"


function ServiceCard({ service }) {

  return (

    <article className="service-card">
      
      <div className="service-top">

        <span className="service-number">
          {service.number}
        </span>
      </div>
<div className="service-content">
  <div className="service-title">
  <h3>
    {service.title}
  </h3>

   </div>
  
   <div className="service-description">

          <p>
            {service.description}
          </p>

        </div>

      </div>

    </article>

  )
}


export default ServiceCard