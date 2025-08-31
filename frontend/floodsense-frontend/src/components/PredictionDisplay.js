import React from "react";
import "./PredictionDisplay.css";

export default function PredictionDisplay({ original, mask }) {
  return (
    <div className="prediction-container">
      <div className="image-block">
        <img src={original} alt="Original" />
        <p className="image-caption">Uploaded Satellite Image</p>
      </div>
      <div className="image-block">
        <img src={mask} alt="Predicted Mask" />
        <p className="image-caption">Predicted Flood Segmentation Mask</p>
      </div>
    </div>
  );
}
