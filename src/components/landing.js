import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import SmsInstructions from "./sms";
import EmailInstructions from "./email";
import ComingSoonBadge from "./coming_soon"; // Import the badge component
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
              color: "white", // Text color
              fontSize: "1.1rem", // Slightly smaller font size
              minWidth: "480px", // Make the tabs longer
              padding: "6px 12px", // Thinner padding for slimmer tabs
              backgroundColor: "#6a0dad", // Lighter purple color for the tab background
              borderRadius: "12px", // Rounded corners
              margin: "0 10px", // Adds spacing between tabs
              transition: "background-color 0.3s", // Smooth transition for hover/acti
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#fff", // Color of the indicator (underline)
            },
          }}
        >
          <Tab label="SMS" />
          <Tab label="Email" />
        </Tabs>
        {value === 0 && <ComingSoonBadge />}{" "}
        {/* Display the badge when SMS tab is active */}
        <div className="instructions-wrapper">
          {value === 0 ? <SmsInstructions /> : <EmailInstructions />}
        </div>
      </Box>
    </div>
  );
};

export default Landing;
