import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../context/authcontext.js";
import "./register.css";
// import Datechooser from "./datecomp";
import Navcomponent from "../nav.component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";

function Register() {
  const history = useNavigate();
  const [ngo, setNgo] = useState({
    ngo_name: "",
    ngo_contact: "",
    ngo_category: "",
    ngo_location: "",
    ngo_latitude: "",
    ngo_longitude: "",
    ngo_vtask: "",
    volunteer_date: "",
    volunteer_location: "",
    volunteer_latitude: "",
    volunteer_longitude: "",
  });
  const handlesubmitClick = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:3001/api/insertngo", ngo);
      history("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(ngo);
  const handleChange = (e) => {
    setNgo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
    setNgo({
      ...ngo,
      volunteer_date: date,
    });
    // setNgo({ ...ngo, volunteer_date: date });
  };

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history("/dashboard");
  }, [user, loading]);

  const [address, setAddress] = useState("");
  const [ngoaddress, setngoAddress] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [ngolatitude, setngoLatitude] = useState(null);
  const [ngolongitude, setngoLongitude] = useState(null);

  const API_KEY = "hajTRvSmBVQCTS8oeeamvnl2DlvfAiwM";
  const handleaddressSubmit = async (event) => {
    event.preventDefault();
    const API_KEY = "YOUR_API_KEY";
    const url1 = `https://www.mapquestapi.com/geocoding/v1/address?key=${API_KEY}&location=${address}`;
    const url = `http://www.mapquestapi.com/geocoding/v1/address?key=hajTRvSmBVQCTS8oeeamvnl2DlvfAiwM&location=${address}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.results[0].locations.length > 0) {
      setLatitude(data.results[0].locations[0].latLng.lat);
      setLongitude(data.results[0].locations[0].latLng.lng);
      setNgo((prev) => ({
        ...prev,
        volunteer_location: address,
        volunteer_latitude: data.results[0].locations[0].latLng.lat,
        volunteer_longitude: data.results[0].locations[0].latLng.lng,
      }));
    }
  };
  const handlengoaddressSubmit = async (event) => {
    event.preventDefault();
    const API_KEY = "YOUR_API_KEY";
    const url1 = `https://www.mapquestapi.com/geocoding/v1/address?key=${API_KEY}&location=${address}`;
    const url2 = `http://www.mapquestapi.com/geocoding/v1/address?key=hajTRvSmBVQCTS8oeeamvnl2DlvfAiwM&location=${ngoaddress}`;

    const response = await fetch(url2);
    const data2 = await response.json();
    console.log("This is what we got ! - ", data2);

    if (data2.results[0].locations.length > 0) {
      setngoLatitude(data2.results[0].locations[0].latLng.lat);
      setngoLongitude(data2.results[0].locations[0].latLng.lng);
      setNgo((prev) => ({
        ...prev,
        ngo_location: ngoaddress,
        ngo_latitude: data2.results[0].locations[0].latLng.lat,
        ngo_longitude: data2.results[0].locations[0].latLng.lng,
      }));
    }
  };

  return (
    <div className="registerNGOcontainer">
      <Navcomponent />
      <div className="register">
        <div className="register__container">
          <h1>NGO Account Registration</h1>
          <input
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="text"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="register__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="regbtn register__btn" onClick={register}>
            Register
          </button>
          <button
            className="regbtn register__btn register__google"
            onClick={signInWithGoogle}
          >
            Register with Google
          </button>
          <div>
            <p>
              Already have an account? <Link to="/">Login</Link> now.
            </p>
          </div>
        </div>
      </div>
      <div className="register">
        <div className="register__container">
          <h1>NGO Registration Form</h1>
          <input
            type="text"
            className="register__textBox"
            name="ngo_name"
            // value={name}
            onChange={handleChange}
            placeholder="NGO Name"
          />
          <input
            type="text"
            className="register__textBox"
            name="ngo_contact"
            // value={Number}
            onChange={handleChange}
            placeholder="NGO contact Number"
          />
          <form onSubmit={handlengoaddressSubmit}>
            <input
              type="text"
              value={ngoaddress}
              onChange={(event) => setngoAddress(event.target.value)}
              placeholder="Enter NGO address"
            />
            <button type="submit" className="regbtn register__btn">
              Get Latitude & Longitude
            </button>
            <p>
              Latitude: {ngolatitude}
              <br />
              Longitude: {ngolongitude}
            </p>
          </form>
          <input
            type="text"
            className="register__textBox"
            // value={name}
            name="ngo_category"
            onChange={handleChange}
            placeholder="Category of Donation Excepted"
          />

          <input
            type="text"
            className="register__textBox"
            name="ngo_vtask"
            // value={name}
            onChange={handleChange}
            placeholder="Volunteer Task"
          />
          <form onSubmit={handleaddressSubmit}>
            <input
              type="text"
              value={address}
              name="volunteer_location"
              // value={name}
              onChange={(event) => {
                setAddress(event.target.value);
                handleChange(event);
              }}
              placeholder="Enter Volunteer task address"
            />
            <button type="submit" className="regbtn register__btn">
              Get Latitude & Longitude
            </button>
            <p>
              Latitude: {latitude}
              <br />
              Longitude: {longitude}
            </p>
          </form>
          <h4>Select Volunteer Date</h4>
          <DatePicker
            selected={selectedDate}
            onChange={handleSelectedDate}
            placeholderText="Select Volunteer Date"
            dateFormat="dd/MM/yyyy"
          />
          <button className="regbtn register__btn" onClick={handlesubmitClick}>
            Register NGO Details
          </button>
        </div>
      </div>
    </div>
  );
}
export default Register;
