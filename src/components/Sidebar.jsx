import React from "react";
import { handleClose } from "../lib/helpers";

function Sidebar() {
  return (
    <nav
      className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left"
      style={{
        zIndex: 2,
        width: "40%",
        minWidth: 300,
        display: "none",
      }}
      id="mySidebar"
    >
      <a href="#" onClick={handleClose} className="w3-bar-item w3-button">
        Close Menu
      </a>

      <a href="#food" className="w3-bar-item w3-button">
        Food
      </a>
      <a href="#about" className="w3-bar-item w3-button">
        About
      </a>
    </nav>
  );
}

export default Sidebar;
