import React from "react";
import { Link } from "react-router-dom";
import Navcomponent from "./nav.component";
import { GoogleButton } from "react-google-button";

const Home = () => {
  const link = "nav-item nav-link";
  const d_link = "btn btn-link";
  return (
    <div>
      <Navcomponent />
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="assets/img/carousel-1.jpg" alt="" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Let's Change The World With Humanity
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        Bring joy to the lives that deserve the most care and
                        love by offering to donate your goods.
                      </p>
                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href="https://www.google.co.in/"
                      >
                        Where can I donate?
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="assets/img/carousel-2.jpg" alt="" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Let's Save More Lifes With Our Helping Hand
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        Join as volunteer, any of the thousands of Non-profit
                        oraganizations near you!
                      </p>
                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href="https://www.google.co.in/"
                      >
                        I want to volunteer!
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-xxl bg-light my-5 py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Feature Causes
            </div>
            <h1 className="display-6 mb-5">
              Every Child Deserves The Opportunity To Learn
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Education</small>
                  </div>
                  <h5 className="mb-3">Education For African Children</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <div className="causes-progress bg-light p-3 pt-2">
                    <div className="d-flex justify-content-between">
                      <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                      </p>
                      <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="assets/img/courses-1.jpg"
                    alt=""
                  />
                  <div className="causes-overlay">
                    <a
                      className="btn btn-outline-primary"
                      href="https://www.google.co.in/"
                    >
                      Read More
                      <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Pure Water</small>
                  </div>
                  <h5 className="mb-3">Ensure Pure Drinking Water</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <div className="causes-progress bg-light p-3 pt-2">
                    <div className="d-flex justify-content-between">
                      <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                      </p>
                      <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="assets/img/courses-2.jpg"
                    alt=""
                  />
                  <div className="causes-overlay">
                    <a
                      className="btn btn-outline-primary"
                      href="https://www.google.co.in/"
                    >
                      Read More
                      <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Healthy Life</small>
                  </div>
                  <h5 className="mb-3">Ensure Medical Treatment</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <div className="causes-progress bg-light p-3 pt-2">
                    <div className="d-flex justify-content-between">
                      <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                      </p>
                      <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="assets/img/courses-3.jpg"
                    alt=""
                  />
                  <div className="causes-overlay">
                    <a
                      className="btn btn-outline-primary"
                      href="https://www.google.co.in/"
                    >
                      Read More
                      <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid donate my-5 py-5"
        data-parallax="scroll"
        data-image-src="assets/img/carousel-2.jpg"
      >
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Donate Now
              </div>
              <h1 className="display-6 text-white mb-5">
                Thanks For The Results Achieved With You
              </h1>
              <p className="text-white-50 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 bg-white p-5">
                <form>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control bg-light border-0"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn-group d-flex justify-content-around">
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio1"
                          checked
                        />
                        <label className="btn btn-light py-3" for="btnradio1">
                          $10
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio2"
                        />
                        <label className="btn btn-light py-3" for="btnradio2">
                          $20
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio3"
                        />
                        <label className="btn btn-light py-3" for="btnradio3">
                          $30
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary px-5"
                        style={{ height: "60px" }}
                      >
                        Donate Now
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h1 className="fw-bold text-primary mb-4">
                NGO<span className="text-white">Connect</span>
              </h1>
              <p>
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square me-1"
                  href="https://www.google.co.in/"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-square me-1"
                  href="https://www.google.co.in/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square me-1"
                  href="https://www.google.co.in/"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-square me-0"
                  href="https://www.google.co.in/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link to="/about" className={d_link}>
                About
              </Link>
              <Link to="/service" className={d_link}>
                Services
              </Link>
              <Link to="/admin" className={d_link}>
                Admin
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <a href="https://www.google.co.in/">Your Site Name</a>, All
                Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <a href="https://htmlcodex.com">HTML Codex</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://www.google.com/"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="assets/lib/wow/wow.min.js"></script>
      <script src="assets/lib/easing/easing.min.js"></script>
      <script src="assets/lib/waypoints/waypoints.min.js"></script>
      <script src="assets/lib/owlcarousel/owl.carousel.min.js"></script>
      <script src="assets/lib/parallax/parallax.min.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  );
};

export default Home;
