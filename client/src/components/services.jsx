import React from "react";
import { Link } from "react-router-dom";
import Navcomponent from "./nav.component";
import Ngovolunteercard from "./ngocards/ngovolunteercard";
import Donationform from "./donationForm/donationform";
import Modal from "./popupmodal/modal";

const Service = () => {
  const link = "btn btn-link";
  const d_link = "dropdown-item";
  const position = [12.202, 17.799];
  return (
    <div>
      <Navcomponent />
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Volunteer
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
                Volunteer
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="ngodonatecardslist">
        <Ngovolunteercard
          ngokey="1"
          img="https://i.pinimg.com/564x/6d/95/67/6d95671ac4aa1d51c14947128479d72c.jpg"
          needs="Teaching Volunteers"
          title="Education With Love"
          author="Lizze Moen"
          reqdesc="We need volunteers to teach in village schools"
          addr="123 Avenue, New York, USA"
          whatservice="Teaching"
          dates="23 June 2023"
          hours="3 Hours"
        ></Ngovolunteercard>
        <Ngovolunteercard
          ngokey="2"
          img="https://i.pinimg.com/564x/e8/ee/b4/e8eeb4c0545ea4cf1df914704de6b24f.jpg"
          needs="Plantation Drive"
          title="Plants With Love"
          reqdesc="we need green thumb volunteers to plant some trees"
          author="Daniel Jones"
          addr="123 Avenue, New York, USA"
          whatservice="Plantation"
          dates="23 June 2023"
          hours="3 Hours"
        ></Ngovolunteercard>
        <Ngovolunteercard
          ngokey="3"
          img="https://i.pinimg.com/564x/33/d8/38/33d838563b34f7d585057c3c8885c47e.jpg"
          needs="Clean Up Drive"
          title="Clean UP!"
          reqdesc="we need kind souls to help clean up our city and streets"
          author="Simon Maher"
          addr="123 Avenue, New York, USA"
          whatservice="Garbage Collection and Clean Up"
          dates="23 June 2023"
          hours="3 Hours"
        ></Ngovolunteercard>
        <Ngovolunteercard
          ngokey="4"
          img="https://i.pinimg.com/564x/01/f0/b6/01f0b6e796bf588fd2d374da8c98e72b.jpg"
          needs="Distribution/Delivery Volunteers"
          title="Emergency Relief"
          reqdesc="supplying food and other essentials to the needy"
          author="Linda Smith"
          addr="123 Avenue, New York, USA"
          whatservice="Delivery"
          dates="23 June 2023"
          hours="3 Hours"
        ></Ngovolunteercard>
      </div>
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
              <p className="mb-0"></p>
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
                NGO<span className="text-white">Connect</span>
              </h1>
              <p></p>
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
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0"></div>
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
export default Service;
