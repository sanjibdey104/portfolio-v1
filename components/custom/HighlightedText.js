import React, { useEffect, useRef, useState } from "react";

const HighlightedText = ({ children }) => {
  const spanRef = useRef(null);
  const [newPath, setNewPath] = useState("");
  const [svgWidth, setSvgWidth] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);
  const [strokeColor, setStrokeColor] = useState("");

  useEffect(() => {
    setSvgWidth(spanRef.current.offsetWidth);
    setSvgHeight(spanRef.current.offsetHeight);
    generateRandomPath(spanRef.current.offsetWidth);
    generateRandomStrokeColor();
  }, []);

  let moveXMin = 5;
  let moveXMax = 7;
  let moveYMin = 5;
  let moveYMax = 12;

  let controlXMin = 10;
  let controlXMax = svgWidth;
  let controlYMin = 15;
  let controlYMax = 20;

  let endYMin = 5;
  let endYMax = 10;

  const generateRandomPath = (spanLen) => {
    let moveX = Math.floor(Math.random() * (moveXMax - moveXMin)) + moveXMin;
    let moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
    let controlX =
      Math.floor(Math.random() * (controlXMax - controlXMin)) + controlXMin;
    let controlY =
      Math.floor(Math.random() * (controlYMax - controlYMin)) + controlYMin;
    let endX = spanLen;
    let endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

    let generatedPath = `M ${moveX} ${moveY} Q ${controlX} ${controlY} ${endX} ${endY}`;
    setNewPath(generatedPath);
  };

  const generateRandomStrokeColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    setStrokeColor(`rgb(${r},${g},${b}, 0.3)`);
  };

  return (
    <span ref={spanRef} className="highlighted-span">
      {children}
      <svg
        id="underline"
        width={svgWidth}
        height={svgHeight}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="pathItem"
          d={newPath}
          stroke={strokeColor}
          fill="transparent"
          strokeWidth="12"
          strokeLinecap="square"
        />
      </svg>
    </span>
  );
};

export default HighlightedText;
