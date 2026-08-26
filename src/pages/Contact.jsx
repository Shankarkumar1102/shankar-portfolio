import { useForm, ValidationError } from "@formspree/react"
import "./Contact.css"

function Contact() {

  const [state, handleSubmit] = useForm("mqpznwwy")

  if (state.succeeded) {
    return (
      <section className="contact">
        <div className="contact-content">
          <p>Thank You!</p>

          <h2>
            Message sent successfully.
          </h2>

          <p>
            Thanks for reaching out. I'll get back to you soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="contact">

      <div className="contact-content">

        <p>Get In Touch</p>

        <h2>
          Let's work together
        </h2>

        <p>
          Have a project or opportunity in mind?
          Feel free to get in touch.
        </p>

        <a href="mailto:shnkarkumar.bca@outlook.com">
          shnkarkumar.bca@outlook.com
        </a>

        <br />

        <a href="tel:+916239901052">
          +91 6239901052
        </a>

      </div>


      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />


        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />


        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />


        <button
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting
            ? "Sending..."
            : "Send Message"}
        </button>

      </form>

    </section>
  )
}

export default Contact