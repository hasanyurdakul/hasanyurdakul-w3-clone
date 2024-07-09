import { useState } from "react";

function Navbar() {
  const [openClose, setOpenClose] = useState("none");
  const handleOpenClose = () => {
    if (openClose === "none") {
      setOpenClose("block");
    } else {
      setOpenClose("none");
    }
  };
  return (
    <div className="w3-top">
      <div
        className="w3-white w3-xlarge"
        style={{ maxWidth: 1200, margin: "auto" }}
      >
        <div
          className={["w3-button w3-padding-16 w3-left", openClose]}
          onClick={handleOpenClose}
        >
          ☰
        </div>
        <div className="w3-right w3-padding-16">Mail</div>
        <div className="w3-center w3-padding-16">My Food</div>
      </div>
    </div>
  );
}

export default Navbar;
