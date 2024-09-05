import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import SmsInstructions from "./sms";
import EmailInstructions from "./email";
import ComingSoonBadge from "./coming_soon";
import "../assets/styles/landing.css";
import logo1 from "../assets/images/flightclub_logo.png";
import logo2 from "../assets/images/goat_logo.png";
import logo3 from "../assets/images/stockx_logo.png";
import phone from "../assets/images/sample_.imessage.png";
import { Tab, Tabs, Box } from "@mui/material";

const Landing = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="landing-container">
      <div className="header-container">
        <div className="phone-container">
          <img
            src={phone}
            alt="Phone showing notifications"
            className="phone"
          />
        </div>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: [
                "Keep track of when the prices drop for the sneakers you want to cop",
              ],
              autoStart: true,
              loop: false,
              delay: 30,
              deleteSpeed: Infinity,
              cursor: "|",
            }}
          />
        </div>
      </div>

      <div className="powered-by-container">
        <p>Track prices from the most popular sites</p>
      </div>

      <div className="logo-container">
        <img src={logo1} alt="FlightClub" className="logo" />
        <img src={logo2} alt="Goat" className="logo" />
        <img src={logo3} alt="StockX" className="logo" />
      </div>

      <Box
        sx={{
          width: "100%",
          padding: "0 5%",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="instruction tabs"
          centered
          sx={{
            "& .MuiTab-root": {
              color: "white",
              fontSize: "1.1rem",
              minWidth: "480px",
              padding: "6px 12px",
              backgroundColor: "#6a0dad",
              borderRadius: "12px",
              margin: "0 10px",
              transition: "background-color 0.3s",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#fff",
            },
          }}
        >
          <Tab label="SMS" />
          <Tab label="Email" />
        </Tabs>
        {value === 0 && <ComingSoonBadge />}{" "}
        <div className="instructions-wrapper">
          {value === 0 ? <SmsInstructions /> : <EmailInstructions />}
        </div>
      </Box>
    </div>
  );
};

export default Landing;
