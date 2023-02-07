import React, { useState } from "react";
import Donationform from "../donationForm/donationform";
import Serviceform from "../ServiceForms/serviceform.card";
import MapCardNgoComponent from "../mapcardcomponent/mapcard";
import "./modal.css";

const Modal3 = ({ servv, title, addr }) => {
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
        {showForm ? "Close Form" : "I Want to Volunteer!"}
      </button>
      {showForm && (
        <div className="donationformdiv">
          <Serviceform services={servv} />
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

export default Modal3;
