import React from "react";
import { Link } from "react-router-dom";
import Navcomponent from "./nav.component";
import OrgCard from "./organisationcards/orgcard";

const Admin = () => {
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
            Admin
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
                Admin
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <div className="ngodonatecardslist">
        <OrgCard
          img="https://i.pinimg.com/564x/77/6d/de/776dde59d7b3325bd85a4353fd535c0c.jpg"
          category="clothes"
          ngoname="Clothes With Love"
          donator="XXX"
          quantity="YYY"
        ></OrgCard>
        <OrgCard
          img="https://images.unsplash.com/photo-1533254012848-644c18f39289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          category="Books and Stationary"
          ngoname="Books With Love"
          donator="XXX"
          quantity="YYY"
        ></OrgCard>
        <OrgCard
          img="https://i.pinimg.com/564x/85/7a/9d/857a9da135269b3c5d8c22e5051ed48a.jpg"
          category="Food"
          ngoname="Food With Love"
          donator="XXX"
          quantity="YYY"
        ></OrgCard>
        <OrgCard
          img="https://i.pinimg.com/564x/5f/81/c5/5f81c59fe8dc41ee88b666b2f0e2dfbc.jpg"
          category="Supplies"
          ngoname="Emergency Relief"
          donator="XXX"
          quantity="YYY"
        ></OrgCard>
      </div> */}

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
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
