// src/components/landing.js
import React, { useState } from "react";
import SmsInstructions from "./sms";
import EmailInstructions from "./email";
import "../assets/styles/landing.css";
import logo1 from "../assets/images/flightclub_logo.png"; // Adjust the paths as necessary
import logo2 from "../assets/images/goat_logo.png";
import logo3 from "../assets/images/stockx_logo.png";

const Landing = () => {
  const [showSmsInstructions, setShowSmsInstructions] = useState(true);

  return (
    <div>
      <p className="centered-paragraph">
        Keep track of when the prices drop for the sneakers you want to cop
      </p>
      <div className="logo-container">
        <img src={logo1} alt="FlightClub" className="logo" />
        <img src={logo2} alt="Goat" className="logo" />
        <img src={logo3} alt="StockX" className="logo" />
      </div>
      <div className="toggle-container">
        <div
          className={`toggle-option ${showSmsInstructions ? "active" : ""}`}
          onClick={() => setShowSmsInstructions(true)}
        >
          SMS
        </div>
        <div
          className={`toggle-option ${!showSmsInstructions ? "active" : ""}`}
          onClick={() => setShowSmsInstructions(false)}
        >
          Email
        </div>
      </div>
      {showSmsInstructions ? <SmsInstructions /> : <EmailInstructions />}
    </div>
  );
};

export default Landing;
