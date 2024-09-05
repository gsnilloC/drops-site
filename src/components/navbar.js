import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/styles/navbar.css";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href=".home">drops.</a>
      </div>
      <div className="navbar-right">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
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
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <a
              href="https://www.linkedin.com/in/collinsgichohi/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <LinkedInIcon sx={{ marginRight: "8px" }} />
              LinkedIn
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a
              href="https://github.com/gsnilloc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <GitHubIcon sx={{ marginRight: "8px" }} />
              GitHub
            </a>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;
