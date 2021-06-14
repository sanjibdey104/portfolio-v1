import styled from 'styled-components';
import { SiJavascript, SiReact, SiGatsby, 
SiNextDotJs, SiGraphql, SiSass, SiNetlify } from "react-icons/si";


const Homepage = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const Intro = styled.section`

  min-height: 30rem;
  display: grid;
  place-content: center;

  .about-self {
    width: 70%;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 90%;
    }

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0 0.5rem;

    transform: translateX(0%);
    animation-name: slideIn;
    animation-duration: 1.5s;
    animation-iteration-count: 1;

    @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0%);
    }
    }

    h2 {
      font-size: calc(1rem + 1vw);

      &:hover span {
        text-shadow: 
        4px 4px 0px tomato, 
        7px 7px 0px rgba(0,0,0,0.2);
      }

      span {
        color: white;
        font-size: clamp(1.85rem, 10vw, 5.2rem);
        display: block;
        text-transform: uppercase;
        text-shadow: 
        4px 4px 0px #d5d5d5, 
        7px 7px 0px rgba(0,0,0,0.2);
        color: #121212;
      }
    }
  }
`

const Experience = styled.section`
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`


const Technologies = styled.section`

  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;


  @media (max-width: 768px) {
    width: 90%;
  }

  h3 {
    margin-bottom: 2rem;
  }

  .tech-stack {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
/* 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(3rem, 5rem)); */
  gap: 3rem;
  }

  svg {
    width: 2rem;
    height: 2rem;
    transition: all 150ms ease-in-out;
    cursor: pointer;  

    &:hover {
      color: tomato;
    }
  }

`

const Home = () => {

  return (
    <Homepage>

      <Intro>
        <div className="about-self">
          <h2>Hey, I'm <span>Sanjib</span></h2>
          <h2>A front-end web developer based in Delhi, India</h2>
          <p>love building interactive and functional web apps</p>
        </div>
      </Intro>

      <Experience>
        <h2>Experience</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eveniet autem dolor expedita a ex?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eveniet autem dolor expedita a ex?</p>
      </Experience>

      <Technologies>
        <h3>technologies i've worked with</h3>

        <div className="tech-stack">
          <SiJavascript />
          <SiReact />
          <SiSass />
          <SiGatsby />
          <SiNextDotJs />
          <SiGraphql />
          <SiNetlify />
        </div>
      </Technologies>

    </Homepage>
  )
}


export default Home;