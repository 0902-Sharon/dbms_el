import React from "react";
import "./ngo.cards.css";
import MapCardNgoComponent from "../mapcardcomponent/mapcard";
import Modal3 from "../popupmodal/modal3";

const Ngovolunteercard = ({
  ngokey,
  img,
  author,
  title,
  reqdesc,
  needs,
  addr,
  whatservice,
  dates,
  hours,
}) => {
  return (
    <div className="card" id={ngokey}>
      <img className="ngocardimage" src={img} />
      <div className="card-body">
        <div className="writtencontent">
          <h3 className="ngocardh2" style={{ color: "black" }}>
            {title}
          </h3>
          <h4 className="ngocardh3" style={{ color: "black" }}>
            Service: {needs}
          </h4>
          <p style={{ color: "black" }}>{reqdesc}</p>
          <h4 style={{ color: "black" }}>Address: </h4>
          <p style={{ color: "black" }}>{addr}</p>
          <h4 style={{ color: "black" }}>Volunteer Date: </h4>
          <p style={{ color: "black" }}>{dates}</p>
          <h4 style={{ color: "black" }}>Volunteer Hours: </h4>
          <p style={{ color: "black" }}>{hours}</p>
          <div className="Map"></div>
          <Modal3
            ngokey={ngokey}
            title={title}
            addr={addr}
            servv={whatservice}
          />
          <h5>{author}</h5>
        </div>
      </div>
    </div>
  );
};

export default Ngovolunteercard;
