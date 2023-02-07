import React from "react";
import "./donationform.css";

const Donationform = () => {
  return (
    <div className="ngodonationformcard">
      <div className="wrapper">
        <header>
          <h1>Donation Form</h1>
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
              <h2>
                <span className="circle1">1</span>Your basic info
              </h2>
              <div className="name">
                <label for="name">Name: </label>
                <br />
                <input type="text" id="name" name="name" className="input" />
                <br />
              </div>

              <div className="email">
                <label for="email">Contact Number: </label>
                <br />
                <input type="text" id="email" name="email" className="input" />
                <br />
              </div>
              <div className="email">
                <label for="email">Donor Id: </label>
                <br />
                <input
                  type="text"
                  id="donor id"
                  name="email"
                  className="input"
                />
                <br />
              </div>
            </div>
            <div className="checkbox_area">
              <h3>
                <span className="circle1">2</span>Select Category of Donation
              </h3>
              <input type="radio" id="age-over" name="age" />
              <label for="age-under">Clothes</label>
              <br />
              <input type="radio" id="age-over" name="age" />
              <label for="age-over">Stationary and/or Books</label>
              <br />
              <input type="radio" id="age-over" name="age" />
              <label for="age-over">Food</label>
              <br />
              <input type="radio" id="age-over" name="age" />
              <label for="age-over">Supplies</label>
              <br />
            </div>
            <div className="donation quantity">
              <h3 for="name">
                <span className="circle1">3</span>Quantity of Donation:{" "}
              </h3>
              <br />
              <input
                placeholder="i.e 10 clothes| 10 books | 3kg food etc"
                type="text"
                id="name"
                name="donation quantity"
                className="input inpquantity"
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
            <div className="pickup_information">
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
            </div>
            <input
              type="submit"
              value="Make Donation"
              className="sign_up_button"
            />
          </form>
        </main>
      </div>
    </div>
  );
};

export default Donationform;
