import React from "react";
import "../assets/styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home">drops.</a>
      </div>
      <div className="navbar-right">
        <a href="#contact" className="contact-button">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
