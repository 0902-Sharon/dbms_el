const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sharon", // put your password here password: "sharon"
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

// app.get("/api/get", (req, res) => {
//   const sqlGet = "Select * FROM DONOR";
//   db.query(sqlGet, (err, result) => {
//     res.send(result);
//   });
// });
app.get(`/api/getClothes`, (req, res) => {
  const sqlGet = "Select * FROM donor WHERE category_donated LIKE '%Clothes%' ";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});
app.get(`/api/getBooks`, (req, res) => {
  const sqlGet1 = "Select * FROM donor WHERE category_donated LIKE '%Books%' ";
  db.query(sqlGet1, (err, result) => {
    res.send(result);
  });
});
app.get(`/api/getFood`, (req, res) => {
  const sqlGet3 = "Select * FROM donor WHERE category_donated LIKE '%Food%' ";
  db.query(sqlGet3, (err, result) => {
    res.send(result);
  });
});
// app.get("/api/getngodetail", (req, res) => {
//   const sqlGet = "Select * FROM DONOR WHERE CATEGORY = 'Clothes' ";
//   db.query(sqlGet, (err, result) => {
//     res.send(result);
//   });
// });
var donorid = 1;
app.post("/api/insert", (req, res) => {
  const values = [
    donorid,
    req.body.ngo_key,
    req.body.d_name,
    req.body.contact,
    req.body.quantity,
    req.body.category,
    req.body.d_date,
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
    donorid++;
    // result.send("Values Inserted");
  });
});

app.post("/api/insertservice", (req, res) => {
  const values = [
    1,
    req.body.s_name,
    req.body.contact,
    req.body.task,
    1,
    "2023-01-01",
    req.body.hours,
  ];
  // const donor_id=4;
  // const ngo_id=1;
  // const date="27 Nov 2020";
  // const d_name = req.body.d_name;
  // const contact = req.body.contact;
  // const quantity = req.body.quantity;
  // const category = req.body.category;
  const sqlInsert =
    "INSERT INTO volunteer (volunteer_id, volunteer_name, volunteer_contact_no, task, ngo_id, volunteer_date, volunteer_hours) VALUES (?)";
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

var ngoid = 4;
app.post("/api/insertngo", (req, res) => {
  const values_ngo = [
    ngoid,
    req.body.ngo_name,
    req.body.ngo_contact,
    req.body.ngo_category,
    req.body.ngo_vtask,
    req.body.volunteer_date,
    req.body.volunteer_location,
    req.body.volunteer_latitude,
    req.body.volunteer_longitude,
  ];
  const values_ngo_location = [
    ngoid,
    req.body.ngo_location,
    req.body.ngo_latitude,
    req.body.ngo_longitude,
  ];
  // const donor_id=4;
  // const ngo_id=1;
  // const date="27 Nov 2020";
  // const d_name = req.body.d_name;
  // const contact = req.body.contact;
  // const quantity = req.body.quantity;
  // const category = req.body.category;
  const sqlInsert_ngo =
    "INSERT INTO ngo (ngo_id, ngo_name, ngo_contact_number, category, volunteer, volunteer_date, volunteer_location, volunteer_latitude, volunteer_longitude) VALUES (?)";
  const sqlInsert_ngo_location =
    "INSERT INTO ngo_location (ngo_id, ngo_address, ngo_latitude, ngo_longitude) VALUES (?)";
  db.query(sqlInsert_ngo, [values_ngo], (err, result) => {
    if (err) {
      console.log("there was some error");
      console.log(err);
      // return res.json(err);
    }
    console.log(result);
    // result.send("Values Inserted");
  }).then(
    db.query(sqlInsert_ngo_location, [values_ngo_location], (err, result) => {
      if (err) {
        console.log("there was some error");
        console.log(err);
        // return res.json(err);
      }
      ngoid++;
      console.log(result);
      // result.send("Values Inserted");
    })
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
