import React from "react";
import "./mapcard.css";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";

const MapCardNgoComponent = ({ latt, longg, title, addr }) => {
  return (
    <div className="ngodonatemapcontainer">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latt, longg]}>
          <Popup>
            {title} <br /> {addr}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapCardNgoComponent;
