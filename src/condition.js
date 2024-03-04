// Condition.js
import React, { useState, useEffect } from "react";
import "./condition.css";
import { ReactTyped } from "react-typed";
import ConnectionMessage from "./ConnectionMessage";

function Condition() {
  const [isLoading, setIsLoading] = useState(true);
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);
  const [showConnectionMessage, setShowConnectionMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDownloadSpeed(60);
      setUploadSpeed(70);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const connectionMessageTimer = setTimeout(() => {
        setShowConnectionMessage(true);
      }, 25000); // Delay after showing the result
      return () => clearTimeout(connectionMessageTimer);
    }
  }, [isLoading]);

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
        {!isLoading && showConnectionMessage && (
          <ConnectionMessage downloadSpeed={downloadSpeed} uploadSpeed={uploadSpeed} />
        )}
      </div>
    </div>
  );
}

export default Condition;
