import React from "react";
import TableRow from "../table_row/tablerow";
import "./org.cards.css";

const OrgCard = ({img, ngoname, category, donator, quantity})=>{
    return (
        <div className="card">
      <img className="ngocardimage" src={img} alt=""/>
      <div className="card-body">
        <div className="writtencontent">
          <h3 className="ngocardh2">{ngoname}</h3>
          <h6 className="ngocardh3">Category: {category}</h6>
          
          <h6>The donators for the NGO are: </h6>
          

          <TableRow>

          </TableRow>

          
        </div>
      </div>
    </div>
    );
};
export default OrgCard;