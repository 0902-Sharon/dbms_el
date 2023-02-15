import React, { useState, useEffect } from "react";
import "./org.cards.css";
import Axios from "axios";

const OrgCard = ({
  img,
  ngoname,
  category,
  donator,
  quantity,
  cat_donation,
}) => {
  const [data, setData] = useState([]);
  // console.log(data);
  // const loadData = async () =>{
  //  const response=await Axios.get("http://localhost:3001/api/get");
  //  setData(response.data);
  // };
  // useEffect(() => {
  //   Axios.get("http://localhost:3004/api/get").then((response) => {
  //     setData(response.data);
  //     console.log(response);
  //   });
  //   // loadData();
  // }, []);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/get${cat_donation}`).then(
      (response) => {
        setData(response.data);
        console.log(response);
      }
    );
    // loadData();
  }, []);
  return (
    <div className="card">
      <img className="ngocardimage" src={img} alt="" />
      <div className="card-body">
        <div className="writtencontent">
          <h3 className="ngocardh2" name={cat_donation}>
            {ngoname}
          </h3>
          <h6 className="ngocardh3">Category: {category}</h6>

          <h6>The donators for the NGO are: </h6>

          {/* <TableRow
          >

          </TableRow> */}
          <div className="NGOTable">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td className="bg-info" style={{ textColor: "black" }}>
                    Donor Name
                  </td>
                  <td className="bg-info">Donor Contact</td>
                  <td className="bg-info">Donated quantity</td>
                  <td className="bg-info">Donation date</td>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr>
                      <td className="table-info">{item.donor_name}</td>
                      <td className="table-info">{item.donor_contact}</td>
                      <td className="table-info">{item.quantity_donated}</td>
                      <td className="table-info">{item.donation_date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrgCard;
