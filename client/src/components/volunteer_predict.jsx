// import { useState } from "react";

// function Volunteer_Predict() {
//   const [formData, setFormData] = useState({
//     skill1: "",
//     skill2: "",
//     skill3: "",
//     skill4: "",
//     skill5: "",
//     skill6: "",
//     skill7: "",
//     skill8: "",
//     skill9: "",
//   });
//   const [predictedNgo, setPredictedNgo] = useState(null);

//   const handleFormChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:3003/predict", {
//       method: "POST",
//       headers: {
//         "Access-Control-Allow-Origin": "http://localhost:3003",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     const data = await response.json();
//     setPredictedNgo(data.predicted_ngo);
//   };

//   return (
//     <div>
//       <h1>Volunteer NGO Predictor</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Skill 1:</label>
//           <input
//             type="number"
//             name="skill1"
//             value={formData.skill1}
//             onChange={handleFormChange}
//           />
//         </div>
//         <div>
//           <label>Skill 2:</label>
//           <input
//             type="number"
//             name="skill2"
//             value={formData.skill2}
//             onChange={handleFormChange}
//           />
//         </div>
//         <div>
//           <label>Skill 3:</label>
//           <input
//             type="number"
//             name="skill3"
//             value={formData.skill3}
//             onChange={handleFormChange}
//           />
//         </div>
//         <div>
//           <label>Skill 4:</label>
//           <input
//             type="number"
//             name="skill4"
//             value={formData.skill4}
//             onChange={handleFormChange}
//           />
//         </div>
//         <div>
//           <label>Skill 5:</label>
//           <input
//             type="number"
//             name="skill5"
//             value={formData.skill5}
//             onChange={handleFormChange}
//           />
//         </div>
//         <div>
//           <label>Skill 6:</label>
//           <input
//             type="number"
//             name="skill6"
//             value={formData.skill6}
//             onChange={handleFormChange}
//           />
//         </div>
//         <div>
//           <label>Skill 7:</label>
//           <input
//             type="number"
//             name="skill7"
//             value={formData.skill7}
//             onChange={handleFormChange}
//           />
//         </div>
//         <div>
//           <label>Skill 8:</label>
//           <input
//             type="number"
//             name="skill8"
//             value={formData.skill8}
//             onChange={handleFormChange}
//           />
//         </div>
//         <div>
//           <label>Skill 9:</label>
//           <input
//             type="number"
//             name="skill9"
//             value={formData.skill9}
//             onChange={handleFormChange}
//           />
//         </div>
//         <button type="submit">Predict NGO</button>
//       </form>
//       {predictedNgo && <p>Predicted NGO for the volunteer: {predictedNgo}</p>}
//     </div>
//   );
// }

// export default Volunteer_Predict;
import { useState } from "react";
import "./volunteer_pred.css";

function Volunteer_Predict() {
  const [formData, setFormData] = useState({
    skill1: "",
    skill2: "",
    skill3: 0,
    skill4: 0,
    skill5: 0,
    skill6: 0,
    skill7: 0,
    skill8: 0,
    skill9: 1,
  });
  const [predictedNgo, setPredictedNgo] = useState(null);

  // const handleFormChange = (e) => {
  //   if (
  //     e.target.name === "skill1" ||
  //     e.target.name === "skill2" ||
  //     e.target.name === "skill9"
  //   ) {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   } else {
  //     let skills = [...formData[e.target.name]];
  //     if (skills.includes(e.target.value)) {
  //       skills = skills.filter((skill) => skill !== e.target.value);
  //     } else {
  //       skills.push(e.target.value);
  //     }
  //     setFormData({ ...formData, [e.target.name]: skills });
  //   }
  // };
  const handleFormChange = (e) => {
    console.log(formData);
    if (
      e.target.name === "skill1" ||
      e.target.name === "skill2" ||
      e.target.name === "skill9"
    ) {
      const randomNumber = generateRandomNumber(1, 9);
      setFormData({ ...formData, [e.target.name]: randomNumber });
    } else {
      const checkedValue = e.target.checked ? 1 : 0;
      // const skills = [...formData[e.target.name]];
      // const updatedSkills = e.target.checked
      //   ? [...skills, checkedValue]
      //   : skills.filter((skill) => skill !== checkedValue);
      setFormData({ ...formData, [e.target.name]: checkedValue });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:3003/predict", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setPredictedNgo(data.predicted_ngo);
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="volunteer-predict">
      <h1>Volunteer NGO Predictor!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="skill1"
            // value={formData.skill1}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="skill2"
            // value={formData.skill2}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <h2>Choose your interests:</h2>
          <div>
            <input
              type="checkbox"
              name="skill3"
              value="1"
              onChange={handleFormChange}
              // checked={formData.skill3.includes("1")}
            />
            <label>Teaching</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="skill4"
              value="2"
              onChange={handleFormChange}
              // checked={formData.skill4.includes("1")}
            />
            <label>Cleaning</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="skill5"
              value="3"
              onChange={handleFormChange}
              // checked={formData.skill5.includes("1")}
            />
            <label>Fundraising</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="skill6"
              value="4"
              onChange={handleFormChange}
              // checked={formData.skill6.includes("1")}
            />
            <label>Marketing</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="skill7"
              value="5"
              onChange={handleFormChange}
              // checked={formData.skill7.includes("1")}
            />
            <label>Cooking</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="skill8"
              value="6"
              onChange={handleFormChange}
              // checked={formData.skill8.includes("1")}
            />
            <label>Collection and Distribution</label>
          </div>
        </div>
        {/* <div>
          <label>Skill 9:</label>
          <input
            type="text"
            name="skill9"
            // value={formData.skill9}
            onChange={handleFormChange}
          />
        </div> */}
        <button type="submit">Predict NGO</button>
      </form>
      {predictedNgo && (
        <p>
          You have been matched with NGO {predictedNgo}! Contact them at{" "}
          {generateRandomNumber(1000000000, 9999999999)} to learn more about
          volunteering opportunities.
        </p>
      )}
    </div>
  );
}

export default Volunteer_Predict;
