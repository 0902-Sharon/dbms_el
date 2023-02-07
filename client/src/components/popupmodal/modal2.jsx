import React, { useState } from "react";
import Donationform from "../donationForm/donationform";
import MapCardNgoComponent from "../mapcardcomponent/mapcard";
import "./modal.css";

const Modal2 = ({ title, addr }) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="buttonmappart">
      <button className="btn-modal" onClick={handleClick}>
        {showForm ? "Close Donation Form" : "Open Donation Form"}
      </button>
      {showForm && (
        <div className="donationformdiv">
          <Donationform />
        </div>
      )}
      {!showForm && (
        <div className={`mapcontent${showForm ? "mapshow" : "maphide"}`}>
          <MapCardNgoComponent
            title={title}
            addr={addr}
            latt="12.971599"
            longg="77.594566"
          />
        </div>
      )}
    </div>
  );
};

export default Modal2;
