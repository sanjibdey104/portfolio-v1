import { useEffect } from "react";
import styled from "styled-components";

const StyledBoucingBallCanvas = styled.canvas`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
`;

const BouncingBallCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById("bouncing-ball-canvas");
    const ctx = canvas.getContext("2d");

    if (canvas.getContext) {
      const gravity = 0.4;
      let hasBottomCollision = false;

      const ball = {
        x: 44,
        y: 0,
        radius: 3,
        yVelocity: 0,
      };

      function renderBall(updatedX, updatedY) {
        // render the ball
        ctx.beginPath();
        // x, y, radius, startAngle, endAngle
        ctx.arc(updatedX, updatedY, ball.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "red";
      }

      function dropBall() {
        // clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // fall calculation
        ball.yVelocity += gravity; // Gravity increases the velocity (faster fall)
        ball.y += ball.yVelocity; // That velocity is applied to the position (ball moves)

        hasBottomCollision = ball.y + ball.radius >= canvas.height;

        if (hasBottomCollision) {
          ball.y = canvas.height - ball.radius;
          ball.yVelocity *= -0.8;
        }

        renderBall(ball.x, ball.y);

        requestAnimationFrame(dropBall);
      }

      dropBall();
    }
  }, []);

  return (
    <StyledBoucingBallCanvas
      id="bouncing-ball-canvas"
      width="60"
      height="24"
      style={{
        width: "60px",
        height: "24px",
        zIndex: "-1",
      }}
    />
  );
};

export default BouncingBallCanvas;
