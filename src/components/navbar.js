import React from "react";
import { Button } from "@mui/material";
import "../assets/styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home">drops.</a>
      </div>
      <div className="navbar-right">
        <Button
          href="#contact"
          variant="contained"
          color="warning"
          sx={{
            color: "white",
            backgroundColor: "#f4a261",
            "&:hover": {
              backgroundColor: "#e76f51",
            },
            padding: "0.5rem 1rem",
            fontSize: "1.1rem",
            borderRadius: "5px",
          }}
        >
          Contact
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
