import React, { useEffect, useRef, useState } from "react";

const HighlightedText = ({ children }) => {
  const spanRef = useRef(null);
  const [newPath, setNewPath] = useState("");
  const [spanWidth, setSpanWidth] = useState(0);
  const [spanHeight, setSpanHeight] = useState(0);
  const [strokeColor, setStrokeColor] = useState("");

  useEffect(() => {
    setSpanWidth(spanRef.current.offsetWidth);
    setSpanHeight(spanRef.current.offsetHeight);
    generateRandomPath(spanRef.current.offsetWidth);
    generateRandomStrokeColor();
  }, []);

  let moveXMin = 10;
  let moveXMax = 12;
  let moveYMin = 5;
  let moveYMax = 10;

  let curveXStartMin = 18;
  let curveXStartMax = 25;
  let curveYStartMin = 5;
  let curveYStartMax = 10;

  let curveXEndMin = spanWidth - 25;
  let curveXEndMax = spanWidth - 20;
  let curveYEndMin = 5;
  let curveYEndMax = 10;

  let endYMin = 5;
  let endYMax = 10;

  const generateRandomPath = (spanWidth) => {
    let moveX = Math.floor(Math.random() * (moveXMax - moveXMin)) + moveXMin;
    let moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;

    let curveXStart =
      Math.floor(Math.random() * (curveXStartMax - curveXStartMin)) +
      curveXStartMin;
    let curveYStart =
      Math.floor(Math.random() * (curveYStartMax - curveYStartMin)) +
      curveYStartMin;
    let curveXEnd =
      Math.floor(Math.random() * (curveXEndMax - curveXEndMin)) + curveXEndMin;
    let curveYEnd =
      Math.floor(Math.random() * (curveYEndMax - curveYEndMin)) + curveYEndMin;

    let endX = spanWidth - 7;
    let endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

    let generatedPath = `M ${moveX} ${moveY} C ${curveXStart} ${curveYStart} ${curveXEnd} ${curveYEnd} ${endX} ${endY}`;
    setNewPath(generatedPath);
  };

  const generateRandomStrokeColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    setStrokeColor(`rgb(${r},${g},${b}, 0.35)`);
  };

  return (
    <span ref={spanRef} className="highlighted-span">
      {children}
      <svg
        id="svg"
        width={spanWidth}
        height={spanHeight}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path"
          d={newPath}
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={spanHeight - 2}
          strokeLinecap="square"
        />
      </svg>
    </span>
  );
};

export default HighlightedText;
