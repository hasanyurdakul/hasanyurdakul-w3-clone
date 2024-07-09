import React, { useState } from "react";

function Sidebar() {
  const [openClose, setOpenClose] = useState("none");
  const handleOpenClose = () => {
    if (openClose === "none") {
      setOpenClose("block");
    } else {
      setOpenClose("none");
    }
  };
  return (
    <nav
      className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left"
      style={{
        zIndex: 2,
        width: "40%",
        minWidth: 300,
        display: openClose,
      }}
      id="mySidebar"
    >
      <a href="#/" onClick={handleOpenClose} className="w3-bar-item w3-button">
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
