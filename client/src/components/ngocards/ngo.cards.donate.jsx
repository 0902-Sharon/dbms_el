import React from "react";
import "./ngo.cards.css";
import MapCardNgoComponent from "../mapcardcomponent/mapcard";
import Modal2 from "../popupmodal/modal2";

const NgoDonatecard = ({ img, author, title, reqdesc, needs, addr }) => {
  return (
    <div className="card">
      <img className="ngocardimage" src={img} />
      <div className="card-body">
        <div className="writtencontent">
          <h3 className="ngocardh2">{title}</h3>
          <h4 className="ngocardh3">Need: {needs}</h4>
          <p>{reqdesc}</p>
          <h4>Address: </h4>
          <p>{addr}</p>

          {/* <div className="Map"></div> */}
          {/* <button className="ngocardbutton">Donate</button> */}
          <Modal2 title={title} addr={addr} />
          {/* <div className="mapshould">
            <MapCardNgoComponent />
          </div> */}

          <h5>{author}</h5>
        </div>
      </div>
    </div>
  );
};

export default NgoDonatecard;
