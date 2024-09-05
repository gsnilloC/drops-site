import React from "react";

const ComingSoonBadge = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "125px",
        left: "300px",
        backgroundColor: "#ff6b6b",
        color: "white",
        borderRadius: "12px",
        padding: "20px 80px",
        fontSize: "4rem",
        fontWeight: "bold",
        zIndex: 9999,
        transform: "rotate(-10deg)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transformOrigin: "center center",
      }}
    >
      Coming Soon
    </div>
  );
};

export default ComingSoonBadge;
