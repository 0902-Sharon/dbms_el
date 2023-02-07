const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "put_ur_pwd_here", // put your password here password: "sharon"
  database: "ngo_website",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  const d_name = req.body.name;
  const contact = req.body.contact;
  const donation_quantity = req.body.donation_quantity;
  const category = req.body.category;
  const sqlInsert =
    "INSERT INTO donor (donor_id, ngo_id, donor_name, donor_contact, quantity_donated, category_donated, donation_date) VALUES (1,1,'Jhanvi Singh','1231231234','10 clothes','clothes','23 Nov 2020');";
  db.query(sqlInsert, (err, result) => {
    if (err) {
      console.log("there was some error");
      console.log(err);
      return res.json(err);
    }
    console.log(result);
    result.send("Values Inserted");
  });
});
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

app.listen(3001, () => {
  console.log("running on port 3001");
});
