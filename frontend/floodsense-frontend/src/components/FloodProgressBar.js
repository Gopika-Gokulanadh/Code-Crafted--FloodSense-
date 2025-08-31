import React from "react";

export default function FloodProgressBar({ percentage }) {
  let color = "green";
  if (percentage > 80) color = "red";
  else if (percentage > 60) color = "orange";
  else if (percentage > 30) color = "yellow";

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%`, backgroundColor: color }}>
        {percentage.toFixed(2)}%
      </div>
    </div>
  );
}
