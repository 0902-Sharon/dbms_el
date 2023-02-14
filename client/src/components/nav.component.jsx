import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SignInUp } from "./signpage";
import Login from "./LoginWithEandP/Login.jsx";
import { UserAuth } from "../components/context/authcontext";

const Navcomponent = () => {
  const link = "nav-item nav-link";
  const home_link = "nav-item nav-link active";
  const d_link = "dropdown-item";
  const [signinpopup, setSigninpopup] = useState(false);
  const [loginpopup, setloginpopup] = useState(false);
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className="container-fluid fixed-top px-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          <small>
            <i className="fa fa-map-marker-alt me-2"></i>RVCE, Bangalore, India
          </small>
          <small className="ms-4">
            <i className="fa fa-envelope me-2"></i>
            team@rvce.edu.in
          </small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <small>Follow us:</small>
          <a className="text-white-50 ms-3" href="https://www.facebook.com/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="text-white-50 ms-3" href="https://twitter.com/">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="text-white-50 ms-3" href="https://in.linkedin.com/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="text-white-50 ms-3" href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="fw-bold text-primary m-0">
            NGO<span className="text-white">Connect</span>
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className={home_link}>
              Home
            </Link>

            <Link to="/about" className={link}>
              About
            </Link>

            <Link to="/service" className={link}>
              Services
            </Link>
            <Link to="/donate" className={link}>
              Donate
            </Link>
            <Link
              to="/"
              className={link}
              onClick={
                user?.displayName
                  ? handleSignOut
                  : () => setloginpopup(!loginpopup)
              }
            >
              {user ? `Logout` : `Login`}
            </Link>
            <Link to="/organization" className={link}>
              Organization
            </Link>

            <Link to="/admin" className={link}>
              Admin
            </Link>
            <Link to="/v_predict" className={link}>
              Predictions
            </Link>
          </div>
          <div className="d-none d-lg-flex ms-2">
            <a href="#" className="btn btn-outline-primary py-2 px-3">
              <button
                className="btn text-light"
                onClick={user ? handleSignOut : () => setSigninpopup(true)}
              >
                {user?.displayName ? "Sign Out" : "Sign In"}
              </button>
              <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                <i className="fa fa-arrow-right"></i>
              </div>
            </a>
          </div>
        </div>
      </nav>

      <Login didclik={loginpopup} setdidclik={setloginpopup} />
      <SignInUp trigger={signinpopup} setTrigger={setSigninpopup} />
    </div>
  );
};

export default Navcomponent;
