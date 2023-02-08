import React, { useState, useEffect } from "react";
import "./donationform.css";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
const Donationform = () => {
  const [donor, setDonor]=useState({
    d_name:"",
    contact:"",
    category:"",
    quantity:"",
  });
  // const [contact, setContact]=useState("")
  // const [category, setCategory]=useState("")
  // const [quantity, setQuantity]=useState("")

  const navigate=useNavigate()
  console.log(donor)
  const handleChange=(e)=>{
    setDonor(prev=>({...prev,[e.target.name]:e.target.value}));
  }
  const handleClick= async e=>{
    e.preventDefault();
    try{
      await Axios.post("http://localhost:3001/api/insert", donor)
      navigate("/")
    }
    catch(err){
      console.log(err)

    }
  }
  // const submitReview=()=>{
  //  Axios.post("http://localhost:3001/api/insert", {d_name:d_name, contact:contact, category:category, quantity:quantity }).then(
  //   ()=>{
  //     alert("successful");
  //   }
  //  );
  // };
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
                <input type="text" id="name" name="d_name" className="input" onChange={handleChange}/>
                <br />
              </div>

              <div className="email">
                <label for="email">Contact Number: </label>
                <br />
                <input type="text" id="email" name="contact" className="input" onChange={handleChange}/>
                <br />
              </div>
              
            </div>
            <div className="checkbox_area">
              <h3>
                <span className="circle1">2</span>Select Category of Donation
              </h3>
              <input type="text" id="age-over" name="category" onChange={handleChange}/>
              <label for="age-under"></label>
              
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
                name="quantity"
                className="input inpquantity"
                onChange={handleChange}/>
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

            {/* <input
              type="submit"
              value="Make Donation"
              className="sign_up_button"
            /> */}
            
            <button className="sign_up_button" onClick={handleClick}>
            Make Donation

            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Donationform;
