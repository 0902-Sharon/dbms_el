const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Pat24Rv18Ihs@", // put your password here password: "sharon"
  database: "ngo_website",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   const d_name = req.body.name;
//   const contact = req.body.contact;
//   const donation_quantity = req.body.donation_quantity;
//   const category = req.body.category;
//   const sqlInsert =
//     "INSERT INTO donor (donor_id, ngo_id, donor_name, donor_contact, quantity_donated, category_donated, donation_date) VALUES (1,1,'Jhanvi Singh','1231231234','10 clothes','clothes','23 Nov 2020');";
//   db.query(sqlInsert, (err, result) => {
//     if (err) {
//       console.log("there was some error");
//       console.log(err);
//       return res.json(err);
//     }
//     console.log(result);
//     result.send("Values Inserted");
//   });
// });
//   const sqlInsert =
//     "INSERT INTO ngo (ngo_id, ngo_name, ngo_contact_number, category, volunteer, volunteer_date, volunteer_location, volunteer_latitude, volunteer_longitude) VALUES (1,'Clothes with Love','1231231234','Clothes','Food Delivery','23 Nov 2020','some location','12.200','17.7990');";
//   db.query(sqlInsert, (err, result) => {
//     if (err) {
//       console.log("there was some error");
//       console.log(err);
//       return res.json(err);
//     }
//     console.log(result);
//     result.send("Values Inserted");
//   });
// });

app.get("/api/get", (req, res)=>{
  const sqlGet="Select * FROM DONOR";
  db.query(sqlGet,(err, result)=>{
    res.send(result);

  });
});

app.post("/api/insert",(req,res)=>{
  const values=[
    7,1,
    req.body.d_name,
    req.body.contact,
    req.body.quantity,
    req.body.category,
    "09 Feb 2023",

  ];
  // const donor_id=4;
  // const ngo_id=1;
  // const date="27 Nov 2020";
  // const d_name = req.body.d_name;
  // const contact = req.body.contact;
  // const quantity = req.body.quantity;
  // const category = req.body.category;
  const sqlInsert =
    "INSERT INTO donor (donor_id, ngo_id, donor_name, donor_contact, quantity_donated, category_donated, donation_date) VALUES (?)";
  db.query(sqlInsert, [values], (err, result) => {
        if (err) {
          console.log("there was some error");
          console.log(err);
          // return res.json(err);
        }
        console.log(result);
        // result.send("Values Inserted");
});
});


app.listen(3001, () => {
  console.log("running on port 3001");
});
