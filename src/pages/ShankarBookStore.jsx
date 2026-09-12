import "./ProjectDetails.css"

import project4 from "../assets/Project4.png"
import productsImage from "../assets/BookStoreProducts.png"
import cartImage from "../assets/BookStoreCart.png"
import checkoutImage from "../assets/BookStoreCheckout.png"
import confirmationImage from "../assets/BookStoreConfirmation.png"
import adminImage from "../assets/BookStoreAdmin.png"


function ShankarBookStore() {

  const backToProjects = () => {
    window.location.href = "/#projects"
  }

  return (
    <div className="project-details-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="project-details-hero">

        <div className="project-details-container">

          <button
            className="project-back-button"
            onClick={backToProjects}
          >
            ← Back to Projects
          </button>

          <p className="project-category">
            Full Stack Development
          </p>

          <h1>
            Shankar Book
            <br />
            Store<span>.</span>
          </h1>

          <p className="project-intro">
            A modern, responsive stationery e-commerce website
            built for Shankar Book Store. The project combines
            a clean shopping experience with product browsing,
            search, cart, checkout, local delivery support,
            and an admin panel.
          </p>

          <div className="project-actions">

            <a
              href="https://shankar-book-store.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="project-primary-button"
            >
              Live Website ↗
            </a>

            <a
              href="https://github.com/Shankarkumar1102/shankar-book-store"
              target="_blank"
              rel="noreferrer"
              className="project-secondary-button"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          HOME SCREEN
      ========================= */}

      <section className="project-preview-section">

        <div className="project-preview">

          <img
            src={project4}
            alt="Shankar Book Store Home Page"
          />

        </div>

      </section>


      {/* =========================
          ABOUT PROJECT
      ========================= */}

      <section className="project-about-section">

        <div className="project-details-container">

          <div className="project-about-grid">

            <div>

              <p className="section-label">
                ABOUT THE PROJECT
              </p>

              <h2>
                A complete
                <br />
                <span>shopping experience.</span>
              </h2>

            </div>

            <div className="project-about-text">

              <p>
                Shankar Book Store is a modern stationery
                e-commerce website designed to make browsing
                and purchasing stationery products simple and
                convenient.
              </p>

              <p>
                The website includes product categories,
                product browsing, search functionality,
                shopping cart, checkout, local delivery
                support, and an admin panel for managing
                store operations.
              </p>

              <p>
                The project was built with a responsive
                approach so customers can comfortably use
                the store across desktop and mobile devices.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          WEBSITE SCREENS
      ========================= */}

      <section className="project-screens-section">

        <div className="project-details-container">

          <div className="project-screens-header">

            <p className="section-label">
              WEBSITE SCREENS
            </p>

            <h2>
              From browsing
              <br />
              to <span>management.</span>
            </h2>

            <p>
              A look at the main customer journey and
              management experience of the Shankar Book Store
              e-commerce platform.
            </p>

          </div>


          {/* =========================
              01 PRODUCTS
          ========================= */}

          <div className="project-screen-block">

            <div className="project-screen-info">

              <span>01</span>

              <div>

                <h3>
                  Products & Categories
                </h3>

                <p>
                  Customers can browse stationery products
                  through organized collections and categories.
                </p>

              </div>

            </div>

            <div className="project-screen-image">

              <img
                src={productsImage}
                alt="Shankar Book Store Products"
              />

            </div>

          </div>


          {/* =========================
              02 CART
          ========================= */}

          <div className="project-screen-block">

            <div className="project-screen-info">

              <span>02</span>

              <div>

                <h3>
                  Shopping Cart
                </h3>

                <p>
                  Customers can review selected products,
                  update quantities, remove items, and see
                  the order total before checkout.
                </p>

              </div>

            </div>

            <div className="project-screen-image">

              <img
                src={cartImage}
                alt="Shankar Book Store Shopping Cart"
              />

            </div>

          </div>


          {/* =========================
              03 CHECKOUT
          ========================= */}

          <div className="project-screen-block">

            <div className="project-screen-info">

              <span>03</span>

              <div>

                <h3>
                  Checkout Experience
                </h3>

                <p>
                  A simple checkout interface collects
                  customer and delivery information required
                  to place a local stationery order.
                </p>

              </div>

            </div>

            <div className="project-screen-image">

              <img
                src={checkoutImage}
                alt="Shankar Book Store Checkout"
              />

            </div>

          </div>


          {/* =========================
              04 ORDER CONFIRMATION
          ========================= */}

          <div className="project-screen-block">

            <div className="project-screen-info">

              <span>04</span>

              <div>

                <h3>
                  Order Confirmation
                </h3>

                <p>
                  After placing an order, customers receive
                  a clear confirmation screen with their
                  order summary and delivery information.
                </p>

              </div>

            </div>

            <div className="project-screen-image">

              <img
                src={confirmationImage}
                alt="Shankar Book Store Order Confirmation"
              />

            </div>

          </div>


          {/* =========================
              05 ADMIN DASHBOARD
          ========================= */}

          <div className="project-screen-block">

            <div className="project-screen-info">

              <span>05</span>

              <div>

                <h3>
                  Admin Dashboard
                </h3>

                <p>
                  The admin panel provides a dedicated
                  management interface for handling products,
                  orders, and day-to-day store operations.
                </p>

              </div>

            </div>

            <div className="project-screen-image">

              <img
                src={adminImage}
                alt="Shankar Book Store Admin Dashboard"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          TECHNOLOGIES
      ========================= */}

      <section className="project-tech-section">

        <div className="project-details-container">

          <p className="section-label">
            TECHNOLOGIES
          </p>

          <h2>
            Built with <span>modern tools.</span>
          </h2>

          <div className="project-tech-list">

            <span>React.js</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SCSS</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>

          </div>

        </div>

      </section>


      {/* =========================
          FEATURES
      ========================= */}

      <section className="project-features-section">

        <div className="project-details-container">

          <p className="section-label">
            KEY FEATURES
          </p>

          <h2>
            Everything needed for
            <br />
            a modern stationery store.
          </h2>

          <div className="project-features-grid">

            <div className="project-feature">
              <span>01</span>

              <h3>
                Product Browsing
              </h3>

              <p>
                Customers can browse stationery products
                through organized categories and product
                sections.
              </p>
            </div>


            <div className="project-feature">
              <span>02</span>

              <h3>
                Search & Categories
              </h3>

              <p>
                Product discovery is made easier with
                search functionality and category-based
                browsing.
              </p>
            </div>


            <div className="project-feature">
              <span>03</span>

              <h3>
                Shopping Cart
              </h3>

              <p>
                Customers can add products to the cart,
                update quantities, and remove items before
                checkout.
              </p>
            </div>


            <div className="project-feature">
              <span>04</span>

              <h3>
                Checkout
              </h3>

              <p>
                A simple checkout experience collects the
                information required to process local orders.
              </p>
            </div>


            <div className="project-feature">
              <span>05</span>

              <h3>
                Local Delivery
              </h3>

              <p>
                The website supports local delivery for
                the store's supported service areas.
              </p>
            </div>


            <div className="project-feature">
              <span>06</span>

              <h3>
                Admin Panel
              </h3>

              <p>
                The admin interface provides functionality
                for managing products and handling store
                operations.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECT LINKS
      ========================= */}

      <section className="project-source-section">

        <div className="project-details-container">

          <div className="project-source">

            <p className="section-label">
              PROJECT LINKS
            </p>

            <h2>
              Explore the
              <br />
              <span>project.</span>
            </h2>

            <div className="project-actions">

              <a
                href="https://shankar-book-store.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-primary-button"
              >
                Live Website ↗
              </a>

              <a
                href="https://github.com/Shankarkumar1102/shankar-book-store"
                target="_blank"
                rel="noreferrer"
                className="project-source-button"
              >
                View Source Code ↗
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default ShankarBookStore