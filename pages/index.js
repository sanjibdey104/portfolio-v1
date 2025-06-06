import { useEffect } from "react";
import Work from "../components/Work";
import { FiDownload } from "react-icons/fi";
import styled from "styled-components";

const Homepage = styled.main`
  display: flex;
  flex-direction: column;

  p,
  ul {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  .section-title {
    font-size: clamp(1.4rem, 1.8vw, 1.6rem);
    border-bottom: 1px solid;
  }

  .about-section {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .tech-and-tools-section {
    .tech-and-tools-list {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      li {
        color: var(--fg-lighter);

        &:hover {
          color: var(--fg-light);
        }
      }
    }
  }

  .highlighted-span {
    position: relative;

    #svg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      overflow: visible;
    }

    .path {
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
      animation: dash 650ms ease-out forwards;
      animation-delay: 1s;
    }
    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }
  }
`;

const Intro = styled.section`
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  .hero-text {
    font-size: clamp(4.5rem, 16vw, 6.5rem);
    line-height: clamp(4.5rem, 16vw, 6.5rem);
  }

  .brief-intro-text {
    font-size: 1.2rem;
    color: var(--fg-lightest);

    p {
      display: inline-block;
      font-size: inherit;
    }

    p.dev-name,
    p.location-name,
    a.current-company {
      color: var(--fg-light);
      font-weight: 600;
    }
  }

  .download-resume-handler {
    display: flex;
    align-items: center;
    gap: 8px;

    color: var(--fg-lighter);
    font-size: 1rem;
    line-height: 1rem;

    svg {
      font-size: 1rem;
    }

    &:hover,
    &:active,
    &:focus {
      color: var(--fg-light);
    }
  }

  @media (max-width: 768px) {
    height: 60vh;

    .hero-text {
      font-size: clamp(4rem, 14vw, 6rem);
      line-height: clamp(4rem, 14vw, 6rem);
    }
  }
`;

const Home = () => {
  useEffect(() => {
    const canvas = document.getElementById("screensaver");
    const ctx = canvas.getContext("2d");
    const introSectionRef = document.querySelector(".intro-section");
    const scale = window.devicePixelRatio || 1;

    // ====================== CANVAS SCALING HANDLER (To handle high DPI screens)
    function resizeCanvas() {
      // CSS size
      const cssWidth = introSectionRef.clientWidth;
      const cssHeight = introSectionRef.clientHeight;

      // Set canvas pixel dimensions
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
      }

      // randomizeBallPos();

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
      // bouncyScreensaver();
    }

    // ================== CALIBRATE SCALING ON WINDOW RESIZE
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <Homepage>
      <Intro className="intro-section">
        <h1 className="hero-text">Frontend Developer</h1>

        <div className="brief-intro-text">
          Namaste, I'm <p className="dev-name">Sanjib</p>. A{" "}
          <p className="location-name">Bangalore</p> based web developer,
          currently at{" "}
          <a
            className="current-company"
            href="https://qoruz.com/"
            target="_blank"
          >
            Qoruz
          </a>
          .
        </div>

        <a
          className="download-resume-handler"
          href="Resume_Sanjib_Kumar_Dey.pdf"
          download
        >
          <span>Download resume</span> <FiDownload />
        </a>

        <canvas
          id="screensaver"
          style={{
            width: "100%",
            height: "100%",
            // zIndex: "-1",
          }}
        ></canvas>
      </Intro>

      <div className="about-section">
        <section className="experience">
          <h2 className="section-title">experience</h2>
          <Work />
        </section>

        <section className="tech-and-tools-section">
          <h2 className="section-title">tech and tools</h2>

          <ul className="tech-and-tools-list">
            <li>HTML</li>
            <li>CSS/SASS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>Firebase</li>
          </ul>
        </section>
      </div>
    </Homepage>
  );
};

export default Home;
