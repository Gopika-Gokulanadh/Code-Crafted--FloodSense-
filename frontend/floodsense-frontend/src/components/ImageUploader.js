import React, { useState } from "react";
import axios from "axios";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [mask, setMask] = useState(null);
  const [coverage, setCoverage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setCoverage(res.data.coverage);
      setMask("data:image/png;base64," + res.data.pred_mask);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>FloodSense</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Predict Flood Mask</button>
      {coverage !== null && <h3>Flood Coverage: {(coverage*100).toFixed(2)}%</h3>}
      {mask && <img src={mask} alt="Predicted Mask" style={{ marginTop: "1rem", maxWidth: "80%" }} />}
    </div>
  );
};

export default ImageUploader;
