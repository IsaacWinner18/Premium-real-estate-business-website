import React from "react";

export default function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div className="bar-chart-loader">
        <div className="bar-chart-bar bar1" />
        <div className="bar-chart-bar bar2" />
        <div className="bar-chart-bar bar3" />
        <div className="bar-chart-bar bar4" />
        <div className="bar-chart-ball" />
      </div>
    </div>
  );
}
