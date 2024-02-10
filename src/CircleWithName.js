import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CircleWithName.css'; // Import the CSS file

const CircleWithName = ({ name, backgroundColor, textColor, fontSize, circleSize }) => {
  const [showNewCircle, setShowNewCircle] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const size = circleSize;
  const newSize = `calc(${size} * 0.4)`;

  const circleStyle = {
    width: size,
    height: size,
    padding: '20px',
    borderRadius: '50%',
    backgroundColor: backgroundColor || '#3498db',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    margin:'auto',
  };

  const textStyle = {
    color: textColor || '#fff',
    fontSize: fontSize || '16px',
    textAlign: 'center',
    margin: 0,
  };

  const newCircleStyle = {
    position: 'absolute',
    width: newSize,
    height: newSize,
    borderRadius: '50%',
    border: '2px solid #D9D9D9',
    animation: `expand 1.5s infinite`, // Infinite animation
    transform: 'translate(-50%, -50%)',
    opacity: 0,
    top: '50%',
    left: '50%',
  };

  useEffect(() => {
    // Use useEffect to trigger the animation when the component mounts
    setShowNewCircle(true);
    setAnimationKey((prevKey) => prevKey + 1); // Reset the animation on each render
  }, []);

  return (
    <div style={circleStyle}>
      <p style={textStyle}>{name}</p>
      {showNewCircle && (
        <div key={animationKey} style={newCircleStyle}>
          <p style={textStyle}></p>
        </div>
      )}
    </div>
  );
};

CircleWithName.propTypes = {
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
  circleSize: PropTypes.string,
};

export default CircleWithName;
