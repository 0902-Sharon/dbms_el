import React, { useState, useEffect } from "react";
import "./serviceform.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Serviceform = ({ ngokey, services }) => {
  const [service, setService] = useState({
    ngo_key: { ngokey },
    s_name: "",
    contact: "",
    volunteer_id: "",
    task: "",
    hours: "",
    v_date: "",
  });
  const navigate = useNavigate();
  console.log(service);
  const handleChange = (e) => {
    setService((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:3001/api/insertservice", service);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="ngoserviceformcard">
      <div className="wrapper">
        <header>
          <h1 style={{ color: "black" }}>Volunteer Sign Up</h1>
          <br />
        </header>
        <main>
          <form
            action="./"
            method="post"
            name="intro"
            className="form-intro"
            id="form-intro"
          >
            <div className="basic-info">
              <h2 style={{ color: "black" }}>
                <span className="circle1">1</span>Your basic info
              </h2>
              <div className="name" style={{ color: "black" }}>
                <label for="name" style={{ color: "black" }}>
                  Name:{" "}
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="s_name"
                  className="input"
                  onChange={handleChange}
                />
                <br />
              </div>

              <div className="email" style={{ color: "black" }}>
                <label for="email" style={{ color: "black" }}>
                  Contact Number:{" "}
                </label>
                <br />
                <input
                  type="text"
                  id="email"
                  name="contact"
                  className="input"
                  onChange={handleChange}
                />
                <br />
              </div>
            </div>
            <div className="checkbox_area" style={{ color: "black" }}>
              <h3 style={{ color: "black" }}>
                <span className="circle1">2</span>Choose Task
              </h3>

              <input
                type="text"
                id="email"
                name="task"
                className="input"
                onChange={handleChange}
              />

              <br />
            </div>
            <div className="donation quantity" style={{ color: "black" }}>
              <h3 for="name" style={{ color: "black" }}>
                <span className="circle1">3</span>Hours of Service:{" "}
              </h3>
              <br />
              <input
                placeholder="i.e 1 hour| 3 hours/week | 5 hours/week etc"
                type="text"
                id="name"
                name="hours"
                className="input inpquantity"
                onChange={handleChange}
              />
            </div>
            <div className="donation quantity" style={{ color: "black" }}>
              <h3 for="name" style={{ color: "black" }}>
                <span className="circle1">4</span>Volunteer Date{" "}
              </h3>
              <input
                placeholder="Year-Month-Day"
                type="text"
                id="name"
                name="v_date"
                className="input inpquantity"
                onChange={handleChange}
              />
              <br />
            </div>
            {/* <div className="your_profile">
              <h2>
                <span className="circle2">2</span>Your profile
              </h2>
              <div className="biography">
                <label for="profile">Biography:</label>
                <br />
                <textarea
                  name="profile"
                  id="profile"
                  className="input2"
                ></textarea>
                <br />
              </div>

              <div className="jobrole">
                <label for="jobs">Job Role:</label>
                <select name="jobs" id="jobs" className="input3">
                  <optgroup label="Web">
                    <option value="FrontEndDeveloper">
                      Front-End Developer
                    </option>
                    <option value="PHPDeveloper">PHP Developer</option>
                    <option value="PythonDeveloper">Python Developer</option>
                    <option value="RailsDeveloper">Rails Developer</option>
                    <option value="WebDesigner">Web Designer</option>
                    <option value="WordPressDeveloper">
                      WordPress Developer
                    </option>
                  </optgroup>
                  <optgroup label="Mobile">
                    <option value="AndroidDeveloper"> Android Developer</option>
                    <option value="iOSDeveloper">iOS Developer</option>
                    <option value="MobileDesigner">Mobile Designer</option>
                  </optgroup>
                  <optgroup label="Business">
                    <option value="Business Owner">Business Owner</option>
                    <option value="Freelancer">Freelancer</option>
                  </optgroup>
                  <optgroup label="Other">
                    <option value="Other">Other</option>
                    <option value="Secretary">Secretary</option>
                    <option value="Maintenance">Maintenance</option>
                  </optgroup>
                </select>
                <br />
              </div>

              <div className="interests">
                <h3>Interests:</h3>
                <input
                  type="checkbox"
                  name="interest[]"
                  value="web"
                  id="development"
                />{" "}
                <label for="development">Development</label>
                <br />
                <input
                  type="checkbox"
                  name="interest[]"
                  value="web"
                  id="design"
                />{" "}
                <label for="design">Design</label>
                <br />
                <input
                  type="checkbox"
                  name="interest[]"
                  value="web"
                  id="business"
                />{" "}
                <label for="business">Business</label>
                <br />
              </div>
            </div> */}
            {/* <div className="pickup_information">
              <h3>
                <span className="circle1">4</span>Pickup Information
              </h3>
              <br />
              <input
                type="text"
                id="pickup_address"
                placeholder="Enter address with pincode"
                name="address"
                className="input2 addressinput"
              />
            </div> */}
            <input
              type="submit"
              value="Sign Up"
              className="sign_up_button"
              onClick={handleClick}
            />
          </form>
        </main>
      </div>
    </div>
  );
};

export default Serviceform;
