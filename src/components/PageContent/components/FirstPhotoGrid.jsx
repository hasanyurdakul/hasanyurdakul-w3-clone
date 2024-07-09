import React from "react";

function FirstPhotoGrid() {
  return (
    <div className="w3-row-padding w3-padding-16 w3-center" id="food">
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/sandwich.jpg"
          alt="Sandwich"
          style={{ width: "100%" }}
        />
        <h3>The Perfect Sandwich, A Real NYC Classic</h3>
        <p>
          Just some random text, lorem ipsum text praesent tincidunt ipsum
          lipsum.
        </p>
      </div>
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/steak.jpg"
          alt="Steak"
          style={{ width: "100%" }}
        />
        <h3>Let Me Tell You About This Steak</h3>
        <p>
          Once again, some random text to lorem lorem lorem lorem ipsum text
          praesent tincidunt ipsum lipsum.
        </p>
      </div>
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/cherries.jpg"
          alt="Cherries"
          style={{ width: "100%" }}
        />
        <h3>Cherries, interrupted</h3>
        <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        <p>What else?</p>
      </div>
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/wine.jpg"
          alt="Pasta and Wine"
          style={{ width: "100%" }}
        />
        <h3>Once Again, Robust Wine and Vegetable Pasta</h3>
        <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
    </div>
  );
}

export default FirstPhotoGrid;
