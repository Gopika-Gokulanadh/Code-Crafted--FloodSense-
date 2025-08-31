import React from "react";
import "./FloodGauge.css";

export default function FloodGauge({ percentage }) {
  const radius = 80;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determine stroke color based on flood percentage
  let strokeColor = "#00c853"; // green by default
  if (percentage > 70) {
    strokeColor = "#f44336"; // red
  } else if (percentage > 40) {
    strokeColor = "#ff9800"; // orange
  }

  return (
    <div className="flood-gauge-container">
      <svg height={radius * 2} width={radius * 2}>
        {/* Background Circle */}
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress Circle */}
        <circle
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="progress-ring"
        />

        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="flood-percentage"
        >
          {percentage.toFixed(1)}%
        </text>
      </svg>
    </div>
  );
}
