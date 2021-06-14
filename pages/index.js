import styled from 'styled-components';
import { SiJavascript, SiReact, SiGatsby, 
SiNextDotJs, SiGraphql, SiSass, SiNetlify } from "react-icons/si";
import Work from '../components/Work';
import { getPortfolioData } from '../lib/data';


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
      width: 95%;
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
  height: 30rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    display: flex;
    align-items: center;
    font-size: clamp(1.3rem,3vw,1.5rem);
  }

  h2::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
    display: inline-block;
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10rem;
  }
`

const Technologies = styled.section`

  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;

  h2 {
    font-size: clamp(1.3rem,3vw,1.5rem);
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  .tech-stack {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(3rem, 5rem));
  gap: 1rem;
  align-content: center;
  }

  svg {
    width: 2rem;
    height: 2rem;
    transition: all 150ms ease-in-out;
    cursor: pointer;  

    &:hover {
      color: #1976d2;
    }
  }

`

const Home = ({workData}) => {

  const {works} = workData;

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
        <Work works={works}/>
      </Experience>

      <Technologies>
        <h2>technologies i've worked with</h2>

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

export const getStaticProps = async() => {
  const {workData} = await getPortfolioData();

  return {
    props: {
      workData
    }
  }
}


export default Home;