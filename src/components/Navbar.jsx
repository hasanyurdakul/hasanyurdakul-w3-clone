import { handleOpen } from "../lib/helpers";

function Navbar() {
  return (
    <div className="w3-top">
      <div
        className="w3-white w3-xlarge"
        style={{ maxWidth: 1200, margin: "auto" }}
      >
        <div className="w3-button w3-padding-16 w3-left" onClick={handleOpen}>
          ☰
        </div>
        <div className="w3-right w3-padding-16">Mail</div>
        <div className="w3-center w3-padding-16">My Food</div>
      </div>
    </div>
  );
}

export default Navbar;
