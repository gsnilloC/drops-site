// src/components/Instructions.js

import React, { useState } from "react";
import SmsInstructions from "./sms";
import EmailInstructions from "./email";
import "../assets/landing.css";

const Instructions = () => {
  const [showSmsInstructions, setShowSmsInstructions] = useState(true);

  return (
    <div>
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

export default Instructions;
