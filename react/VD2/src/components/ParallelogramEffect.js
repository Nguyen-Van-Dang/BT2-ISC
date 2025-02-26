import React, { useEffect, useRef, useState } from "react";

const ParallelogramEffect = () => {
  const canvasRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["red", "blue", "green", "purple", "orange"];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let width = 0;
    const maxWidth = canvas.width * 0.7;
    const height = 250;
    let x = (canvas.width - maxWidth) / 2;
    let y = canvas.height / 2 + height / 2;
    let skew = 200;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let gradient = ctx.createLinearGradient(x, y, x + width, y);
      gradient.addColorStop(0, colors[colorIndex]);
      gradient.addColorStop(1, "white");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + width, y);
      ctx.lineTo(x + width - skew, y - height);
      ctx.lineTo(x - skew, y - height);
      ctx.closePath();
      ctx.fill();

      if (width < maxWidth) {
        width += 5;
      } else {
        width = 0;
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, [colorIndex]); 

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        transform: "skewY(15deg)",
        position: "absolute",
        top: "100px",
        left: "50px",
        width: "1200px",
        height: "430px",
      }}
    ></canvas>
  );
};

export default ParallelogramEffect;