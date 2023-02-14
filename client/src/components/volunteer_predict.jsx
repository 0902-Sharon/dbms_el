import { useState } from "react";

function Volunteer_Predict() {
  const [formData, setFormData] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    skill7: "",
    skill8: "",
    skill9: "",
  });
  const [predictedNgo, setPredictedNgo] = useState(null);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3003/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setPredictedNgo(data.predicted_ngo);
  };

  return (
    <div>
      <h1>Volunteer NGO Predictor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Skill 1:</label>
          <input
            type="number"
            name="skill1"
            value={formData.skill1}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Skill 2:</label>
          <input
            type="number"
            name="skill2"
            value={formData.skill2}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Skill 3:</label>
          <input
            type="number"
            name="skill3"
            value={formData.skill3}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Skill 4:</label>
          <input
            type="number"
            name="skill4"
            value={formData.skill4}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Skill 5:</label>
          <input
            type="number"
            name="skill5"
            value={formData.skill5}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Skill 6:</label>
          <input
            type="number"
            name="skill6"
            value={formData.skill6}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Skill 7:</label>
          <input
            type="number"
            name="skill7"
            value={formData.skill7}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Skill 8:</label>
          <input
            type="number"
            name="skill8"
            value={formData.skill8}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Skill 9:</label>
          <input
            type="number"
            name="skill9"
            value={formData.skill9}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit">Predict NGO</button>
      </form>
      {predictedNgo && (
        <p>Predicted NGO for the volunteer: {predictedNgo}</p>
      )}
    </div>
  );
}

export default Volunteer_Predict;
