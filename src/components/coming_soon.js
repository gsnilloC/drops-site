import React from "react";

const ComingSoonBadge = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "125px", // Adjust the position as needed
        left: "300px", // Adjust the position as needed
        backgroundColor: "#ff6b6b",
        color: "white",
        borderRadius: "12px",
        padding: "20px 80px",
        fontSize: "4rem",
        fontWeight: "bold",
        zIndex: 9999, // Ensures the badge is on top of other elements
        transform: "rotate(-10deg)", // Rotate the badge to make it diagonal
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds shadow for emphasis
        transformOrigin: "center center", // Ensures rotation is centered
      }}
    >
      Coming Soon
    </div>
  );
};

export default ComingSoonBadge;
