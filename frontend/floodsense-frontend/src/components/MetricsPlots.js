import React from "react";

export default function MetricsPlots({ plots }) {
  return (
    <div className="metrics-grid">
      {plots.map((p, i) => (
        <img key={i} src={p} alt={`plot-${i}`} />
      ))}
    </div>
  );
}
