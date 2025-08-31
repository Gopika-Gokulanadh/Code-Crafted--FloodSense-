import React, { useState } from "react";
import UploadBox from "./components/UploadBox";
import PredictionDisplay from "./components/PredictionDisplay";
import MetricsPlots from "./components/MetricsPlots";
import FloodGauge from "./components/FloodGauge";
import PerformanceCards from "./components/PerformanceCards";

import "./App.css";

import dice from "./assets/dice_best.png";
import iou from "./assets/iou_best.png";
import loss from "./assets/loss_best.png";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [predictedMask, setPredictedMask] = useState(null);
  const [coverage, setCoverage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (file) => {
    setSelectedFile(file);
    setOriginalImage(URL.createObjectURL(file));
    setPredictedMask(null);
    setCoverage(null);
  };

  const handleSubmit = () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    setLoading(true);
    fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setCoverage(data.coverage * 100);
        setPredictedMask(`data:image/png;base64,${data.pred_mask}`);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Prediction error:", err);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <h1 className="title">FloodSense</h1>
      <p className="tagline">Satellite Vision. Smarter Disaster Response.</p>

      <UploadBox onFileChange={handleFileChange} />

      {selectedFile && (
        <button className="submit-btn" onClick={handleSubmit}>
          {loading ? "Predicting..." : "Submit Image"}
        </button>
      )}

      {coverage !== null && (
        <div className="section">
          <h2 className="section-heading">Flood Coverage Analysis</h2>

          <div className="coverage-analysis">
            <div className="analysis-text">
              {coverage >= 30 && <div className="warning-icon">⚠️</div>}

              <h3>
                Flood Coverage: <span>{coverage.toFixed(1)}%</span>
              </h3>

              <p>
                {coverage < 10 &&
                  "✅ Minimal flood detected. Area appears mostly dry and safe."}
                {coverage >= 10 &&
                  coverage < 30 &&
                  "Mild flooding detected. No immediate threat, but stay alert."}
                {coverage >= 30 &&
                  coverage < 60 &&
                  "⚠️ Moderate flooding detected. Evaluate the area and consider precautions."}
                {coverage >= 60 &&
                  coverage < 85 &&
                  "🚨 Significant flooding detected. Caution is strongly advised."}
                {coverage >= 85 &&
                  "🛑 Severe flooding detected. Immediate action may be necessary. Alert local authorities if needed."}
              </p>
            </div>

            <FloodGauge percentage={coverage} />
          </div>
        </div>
      )}

      {originalImage && predictedMask && (
        <div className="section">
          <h2 className="section-heading">Prediction Results</h2>
          <PredictionDisplay original={originalImage} mask={predictedMask} />
        </div>
      )}

      <div className="section">
        <PerformanceCards />
      </div>

      <div className="section">
        <h2 className="section-heading">Model Evaluation Metrics</h2>
        <MetricsPlots plots={[dice, iou, loss]} />
      </div>

      {/* ⬇️ Footer Section */}
      <footer className="footer">
        <p>© 2025 FloodSense | Built for Smarter Disaster Response</p>
        <p>
          Made with 🌍 satellite data & AI |{" "}
          <a
            href="https://github.com/Gopika-Gokulanadh/Code-Crafted--FloodSense-"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
