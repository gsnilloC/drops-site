import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import SmsInstructions from "./sms";
import EmailInstructions from "./email";
import "../assets/styles/landing.css";
import logo1 from "../assets/images/flightclub_logo.png";
import logo2 from "../assets/images/goat_logo.png";
import logo3 from "../assets/images/stockx_logo.png";

const Landing = () => {
  const [showSmsInstructions, setShowSmsInstructions] = useState(true);

  return (
    <div>
      {/* Separate div for typewriter and toggles */}
      <div className="header-container">
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: [
                "Keep track of when the prices drop for the sneakers you want to cop",
              ],
              autoStart: true,
              loop: false, // Disable looping so the text appears once and stays
              delay: 30, // Faster typing speed
              deleteSpeed: Infinity, // Set to Infinity to prevent deletion
              cursor: "|", // Show cursor
            }}
          />
        </div>
      </div>

      {/* Separate div for logos */}
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
