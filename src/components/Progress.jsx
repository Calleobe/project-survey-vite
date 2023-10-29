import React from "react";

export const Progress = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          height: "20px",
          width: "100%",
          position: "relative",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#007bff",
            height: "20px",
            width: `${progressPercentage}%`,
            borderRadius: "10px",
            transition: "width 1s cubic-bezier(0.25, 0.1, 0.25, 1)", // Smoother animation
          }}
        ></div>
      </div>
      <p>
        {current}/{total} Questions Answered
      </p>
    </div>
  );
};
