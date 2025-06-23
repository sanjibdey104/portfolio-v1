import React, { useEffect } from "react";

const BouncingScreensaverCanvas = ({ targetSectionId = "intro-section" }) => {
  useEffect(() => {
    const canvas = document.getElementById("bouncing-screensaver-canvas");

    if (canvas) {
      const ctx = canvas?.getContext("2d");
      const introSectionRef = document.getElementById(targetSectionId);
      const scale = window.devicePixelRatio || 1;

      // ====================== CANVAS SCALING HANDLER (To handle high DPI screens)
      function resizeCanvas() {
        // CSS size
        const cssWidth = introSectionRef.clientWidth;
        const cssHeight = introSectionRef.clientHeight;

        // Set canvas pixel dimensions
        canvas.style.width = `${cssWidth}px`;
        canvas.style.height = `${cssHeight}px`;

        // Set canvas resolution dimensions
        canvas.width = cssWidth * scale;
        canvas.height = cssHeight * scale;

        // Scale the drawing context
        ctx.setTransform(scale, 0, 0, scale, 0, 0); // resets and applies scale
      }
      // Call once on load
      resizeCanvas();

      // ================= RANDOMIZE METRICS
      function generateRandomPos(minCoord, maxCoord) {
        return Math.random() * (maxCoord - minCoord) + minCoord;
      }

      function generateRandomSpeed(minSpeed, maxSpeed) {
        return Math.random() * (maxSpeed - minSpeed) + minSpeed;
      }

      if (canvas.getContext) {
        const ball = {
          x: 0,
          y: 0,
          radius: 8,
          xVelocity: 0,
          yVelocity: 0,
        };

        let mouseX = 0;
        let mouseY = 0;

        function randomizeBallPos() {
          const minSpeed = 2;
          const maxSpeed = 5;
          const minXCoord = ball.radius;
          const maxXCoord = canvas.width / scale - ball.radius;
          const minYCoord = ball.radius;
          const maxYCoord = canvas.height / scale - ball.radius;

          ball.xVelocity = generateRandomSpeed(minSpeed, maxSpeed);
          ball.yVelocity = generateRandomSpeed(minSpeed, maxSpeed);
          ball.x = generateRandomPos(minXCoord, maxXCoord);
          ball.y = generateRandomPos(minYCoord, maxYCoord);

          console.log("ball coords: ", ball);
        }

        randomizeBallPos();

        function renderBall(updatedX, updatedY) {
          // Draw the ball
          ctx.beginPath();
          ctx.arc(updatedX, updatedY, ball.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 128, 0, 0.5)";
          ctx.fill();

          // [NOTE]: explore this text alignment adjustment another time
          // Draw the coordinates
          // ctx.font = "12px Arial";
          // ctx.fillStyle = "red";
          // const offsetTextXPos = updatedX - 25;
          // const offsetTextYPos = updatedY - 15;
          // const xCoordProximity = (canvas.width / scale - updatedX).toFixed(0);
          // const yCoordProximity = (canvas.height / scale - updatedY).toFixed(0);

          // ctx.fillText(
          //   `(${updatedX.toFixed(0)}: [${xCoordProximity}], ${updatedY.toFixed(
          //     0
          //   )}: [${yCoordProximity}])`,
          //   xCoordProximity <= 100 || xCoordProximity >= 500
          //     ? offsetTextXPos - 100
          //     : offsetTextXPos,
          //   yCoordProximity <= 50 || yCoordProximity >= 500
          //     ? offsetTextYPos - 50
          //     : offsetTextYPos
          // );
        }

        // ================== MOUSE POSITION BASED RENDERER

        // canvas.addEventListener("mousemove", (e) => {
        //   const rect = canvas.getBoundingClientRect();
        //   mouseX = e.clientX - rect.x;
        //   mouseY = e.clientY - rect.y;
        // });

        // ============== Use either of the two options
        // OPTION [1]: MANUAL THROTTLING
        // function throttle(fn, delay) {
        //   let lastCall = 0;

        //   return function (...args) {
        //     const now = Date.now();
        //     if (now - lastCall >= delay) {
        //       lastCall = now;
        //       fn.apply(this, args);
        //     }
        //   };
        // }

        // (less precise): since Date.now() timing might not sync with browser frame refresh rate
        // function renderBasedOnMouseMovement() {
        //   ctx.clearRect(0, 0, canvas.width, canvas.height);
        //   renderBall(mouseX, mouseY);
        // }

        // const throttledRendering = throttle(renderBasedOnMouseMovement, 200);
        // throttledRendering();

        // OPTION [2]: USING NATIVE ANIMATION FRAMING
        // (smoother): since browser frame painting syncs with screen refresh rate (~60fps)
        function renderBasedOnMouseMovement() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          renderBall(mouseX, mouseY);
          requestAnimationFrame(renderBasedOnMouseMovement);
        }

        // requestAnimationFrame(renderBasedOnMouseMovement);

        // ================== BOUNCING OFF SCREENSAVER ANIMATION
        function bouncyScreensaver() {
          // clear the canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // fall calculation
          ball.x += ball.xVelocity;
          ball.y += ball.yVelocity;

          renderBall(ball.x, ball.y);

          // requestAnimationFrame(bouncyScreensaver);
        }

        bouncyScreensaver();
      }

      // ================== CALIBRATE SCALING ON WINDOW RESIZE
      window.addEventListener("resize", resizeCanvas);
      return () => window.removeEventListener("resize", resizeCanvas);
    }
  }, []);

  return (
    <canvas
      id="bouncing-screensaver-cavas"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></canvas>
  );
};

export default BouncingScreensaverCanvas;
