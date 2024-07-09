import React from "react";
import FirstPhotoGrid from "./components/FirstPhotoGrid";
import SecondPhotoGrid from "./components/SecondPhotoGrid";
import Pagination from "./components/Pagination";
import About from "./components/About";
import Footer from "./components/Footer/Footer";

function PageContent() {
  return (
    <div
      className="w3-main w3-content w3-padding"
      style={{ maxWidth: 1200, marginTop: 100 }}
    >
      <FirstPhotoGrid />
      <SecondPhotoGrid />
      <Pagination />
      <hr id="about"></hr>
      <About />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default PageContent;
