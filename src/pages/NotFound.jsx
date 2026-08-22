import { Link } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
  return (
    <section className="not-found">

      <p className="not-found-number">404</p>

      <h1>Page not found</h1>

      <p>
        The page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link to="/" className="not-found-button">
        Back to Home
      </Link>

    </section>
  )
}

export default NotFound