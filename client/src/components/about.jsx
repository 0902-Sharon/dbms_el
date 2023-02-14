import React from "react";
import { Link } from "react-router-dom";
import Navcomponent from "./nav.component";

const About = () => {
  const link = "nav-item nav-link";
  const d_link = "btn btn-link";
  return (
    <div>
      <Navcomponent />
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="https://www.google.co.in/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="https://www.google.co.in/">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src="assets/img/about-1.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src="assets/img/about-2.jpg"
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  About Us
                </div>
                <h1 className="display-6 mb-5">
                  We Help People In Need Around The World
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    NGO Connect is a centralised application aimed at connecting NGOs, volunteers and donors from around the world, and ensuring a smooth and hassle free process for volunteering and donating goods.
                  </p>
                  <span className="text-primary">Akanksha & Sharon, Co-Founders</span>
                </div>
                <p className="mb-5">
                 We will be grateful to you if you choose to help us!
                </p>
                <a
                  className="btn btn-primary py-2 px-3 me-3"
                  href="https://www.google.co.in/"
                >
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
                <a
                  className="btn btn-outline-primary py-2 px-3"
                  href="https://www.google.co.in/"
                >
                  Contact Us
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              What We Do
            </div>
            <h1 className="display-6 mb-5">
              Learn More What We Do And Get Involved
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/icon-1.png"
                  alt=""
                />
                <h4 className="mb-3">Child Education</h4>
                <p className="mb-4">
                  Help children from around the world get a good education.
                </p>
                <a
                  className="btn btn-outline-primary px-3"
                  href="https://www.google.co.in/"
                >
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/icon-2.png"
                  alt=""
                />
                <h4 className="mb-3">Medical Treatment</h4>
                <p className="mb-4">
                  Donate money to buy medicinal supplies for hospitals in rural areas.
                </p>
                <a
                  className="btn btn-outline-primary px-3"
                  href="https://www.google.co.in/"
                >
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/icon-3.png"
                  alt=""
                />
                <h4 className="mb-3">Pure Drinking Water</h4>
                <p className="mb-4">
                  Help us ensure clean drinking water for all.
                </p>
                <a
                  className="btn btn-outline-primary px-3"
                  href="https://www.google.co.in/"
                >
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Team Members
            </div>
            <h1 className="display-6 mb-5">
              Let's Meet With Our Ordinary Soldiers
            </h1>
          </div>
          <div className="row g-4">
            
              
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/team-2.jpg"
                    alt=""
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Akanksha A Pai</h5>
                  <p className="text-primary">Co - Founder</p>
                  <div className="team-social text-center">
                    <a
                      classNameName="text-white-50 ms-3"
                      href="https://www.facebook.com/"
                    >
                      <i classNameName="fab fa-facebook-f"></i>
                    </a>
                    <a
                      classNameName="text-white-50 ms-3"
                      href="https://twitter.com/"
                    >
                      <i classNameName="fab fa-twitter"></i>
                    </a>
                    <a
                      classNameName="text-white-50 ms-3"
                      href="https://in.linkedin.com/"
                    >
                      <i classNameName="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      classNameName="text-white-50 ms-3"
                      href="https://www.instagram.com/"
                    >
                      <i classNameName="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/team-3.jpg"
                    alt=""
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Sharon Thomas</h5>
                  <p className="text-primary">Co - Founder</p>
                  <div className="team-social text-center">
                    <a
                      classNameName="text-white-50 ms-3"
                      href="https://www.facebook.com/"
                    >
                      <i classNameName="fab fa-facebook-f"></i>
                    </a>
                    <a
                      classNameName="text-white-50 ms-3"
                      href="https://twitter.com/"
                    >
                      <i classNameName="fab fa-twitter"></i>
                    </a>
                    <a
                      classNameName="text-white-50 ms-3"
                      href="https://in.linkedin.com/"
                    >
                      <i classNameName="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      classNameName="text-white-50 ms-3"
                      href="https://www.instagram.com/"
                    >
                      <i classNameName="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
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
                
              </p>
              <div className="d-flex pt-2">
                <a
                  classNameName="text-white-50 ms-3"
                  href="https://www.facebook.com/"
                >
                  <i classNameName="fab fa-facebook-f"></i>
                </a>
                <a
                  classNameName="text-white-50 ms-3"
                  href="https://twitter.com/"
                >
                  <i classNameName="fab fa-twitter"></i>
                </a>
                <a
                  classNameName="text-white-50 ms-3"
                  href="https://in.linkedin.com/"
                >
                  <i classNameName="fab fa-linkedin-in"></i>
                </a>
                <a
                  classNameName="text-white-50 ms-3"
                  href="https://www.instagram.com/"
                >
                  <i classNameName="fab fa-instagram"></i>
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
              <p></p>
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
                
              </div>
              <div className="col-md-6 text-center text-md-end">
                <a href="https://htmlcodex.com"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
