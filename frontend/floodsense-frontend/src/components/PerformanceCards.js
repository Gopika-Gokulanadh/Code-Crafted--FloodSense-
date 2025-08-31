import React from "react";
import "./PerformanceCards.css";
import { FaBullseye, FaShapes, FaPercent } from "react-icons/fa";

const metrics = [
  {
    title: "Dice Score",
    subtitle: "Overlap Index",
    value: 0.8884,
    icon: <FaShapes />,
    color: "#3B82F6", // royal blue
  },
  {
    title: "IoU Score",
    subtitle: "Intersection over Union",
    value: 0.7991,
    icon: <FaBullseye />,
    color: "#8B5CF6", // deep violet
  },
  {
    title: "Accuracy",
    subtitle: "Pixel Similarity",
    value: 0.9254,
    icon: <FaPercent />,
    color: "#1E3A8A", // navy blue
  },
];



export default function PerformanceCards() {
  return (
    <div className="performance-container">
      <h2 className="section-heading">Performance Analytics</h2>
      <div className="card-grid">
        {metrics.map((metric, index) => (
          <div className="glass-card" key={index}>
            <div
              className="circular-progress"
              style={{
                background: `conic-gradient(${metric.color} ${metric.value * 360}deg, rgba(255,255,255,0.1) ${metric.value * 360}deg)`,
              }}
            >
              <div className="progress-value">
                {Math.round(metric.value * 100)}%
              </div>
            </div>
            <div className="metric-info">
              <div className="metric-icon">{metric.icon}</div>
              <h3>{metric.title}</h3>
              <span className="metric-subtitle">{metric.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
