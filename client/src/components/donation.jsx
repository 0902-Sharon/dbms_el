import React from "react";
import { Link } from "react-router-dom";
import Navcomponent from "./nav.component";
import NgoDonatecard from "./ngocards/ngo.cards.donate";
import Donationform from "./donationForm/donationform";
import Modal from "./popupmodal/modal";

const Donate = () => {
  const link = "btn btn-link";
  const d_link = "dropdown-item";
  const position = [51.505, -0.09];
  return (
    <div>
      <Navcomponent />
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Donate
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
                Donate
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="ngodonatecardslist">
        <NgoDonatecard
          img="https://i.pinimg.com/564x/77/6d/de/776dde59d7b3325bd85a4353fd535c0c.jpg"
          needs="Clothes"
          title="Clothes With Love"
          author="Lizze Moen"
          reqdesc="some description about what they need"
          addr="123, Wall Street, USA"
        ></NgoDonatecard>
        <NgoDonatecard
          img="https://images.unsplash.com/photo-1533254012848-644c18f39289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          needs="Books and Stationary"
          title="Books With Love"
          reqdesc="Could you donate books for school children?"
          author="Daniel Jones"
          addr="123, Wall Street, USA"
        ></NgoDonatecard>
        <NgoDonatecard
          img="https://i.pinimg.com/564x/85/7a/9d/857a9da135269b3c5d8c22e5051ed48a.jpg"
          needs="Food"
          title="Food With Love"
          reqdesc="Feed the hungry and bless their souls"
          author="Daniel Jones"
          addr="123, Wall Street, USA"
        ></NgoDonatecard>
        <NgoDonatecard
          img="https://i.pinimg.com/564x/5f/81/c5/5f81c59fe8dc41ee88b666b2f0e2dfbc.jpg"
          needs="Supplies"
          title="Emergency Relief"
          reqdesc="supplying food and other essentials to the needy"
          author="Daniel Jones"
          addr="123, Wall Street, USA"
        ></NgoDonatecard>
      </div>
      {/* <div classname="donation form">
        <Modal />
      </div> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Donate Now
              </div>
              <h1 className="display-6 mb-5">
                Thanks For The Results Achieved With You
              </h1>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 bg-secondary p-5">
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
                Chari<span className="text-white">Team</span>
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
              <Link to="/about" className={link}>
                About
              </Link>
              <Link to="/service" className={link}>
                Services
              </Link>
              <Link to="/admin" className={link}>
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
    </div>
  );
};
export default Donate;
