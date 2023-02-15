import React from "react";
import "./ngo.cards.css";
import MapCardNgoComponent from "../mapcardcomponent/mapcard";
import Modal2 from "../popupmodal/modal2";

const NgoDonatecard = ({
  img,
  author,
  title,
  reqdesc,
  needs,
  addr,
  ngokey,
}) => {
  return (
    <div className="card">
      <img className="ngocardimage" src={img} />
      <div className="card-body">
        <div className="writtencontent">
          <h3 className="ngocardh2" style={{ color: "black" }}>
            {title}
          </h3>
          <h4 className="ngocardh3" style={{ color: "black" }}>
            Need: {needs}
          </h4>
          <p style={{ color: "black" }}>{reqdesc}</p>
          <h4 style={{ color: "black" }}>Address: </h4>
          <p style={{ color: "black" }}>{addr}</p>

          {/* <div className="Map"></div> */}
          {/* <button className="ngocardbutton">Donate</button> */}
          <Modal2 ngokey={ngokey} title={title} addr={addr} />
          {/* <div className="mapshould">
            <MapCardNgoComponent />
          </div> */}

          <h5 style={{ color: "black" }}>{author}</h5>
        </div>
      </div>
    </div>
  );
};

export default NgoDonatecard;
