/* condition.js */
import React from "react";
import "./condition.css";
import { ReactTyped } from "react-typed";

function Condition() {
  return (
    <div className="main">
      <h1 style={{ marginLeft: '20px', marginTop: '20px' }}>
        {"How to make "}
        <br />
        {"it "}
        <ReactTyped
          strings={["perfect ", "fust", "Lasts"]}
          typeSpeed={100}
          loop
          backSpeed={30}
          cursorChar=" ?"
          showCursor={true}
        />
      </h1>
      <div className="custom-div">
      </div>
    </div>
  );
}

export default Condition;
