import styled from 'styled-components';
import { SiJavascript, SiReact, SiNextDotJs, SiGraphql, SiSass } from "react-icons/si";
import Work from '../components/Work';
import { getPortfolioData } from '../lib/data';
import { motion } from 'framer-motion';
import React from 'react';


const Homepage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 3rem;
`

const Intro = styled(motion.section)`

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

    /* transform: translateX(0%);
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
    } */

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

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 5rem;
  }

  h2 {
    font-size: clamp(1.75rem,3vw,2rem);
    border-bottom: 2px solid ${({theme}) => theme.textColor};
  }
`

const Technologies = styled.section`

  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    font-size: clamp(1.75rem,3vw,2rem);
    border-bottom: 2px solid ${({theme}) => theme.textColor};
  }

  .tech-stack {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    list-style: none;
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

      <Intro initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.5}}>
        <div className="about-self">
          <h2>Hey, I'm <span>Sanjib</span></h2>
          <h2>A front-end web developer based in Delhi, India</h2>
          <p>passionate about building accessible, user-first web applications.</p>
        </div>
      </Intro>

      <Experience>
        <h2>experience</h2>
        <Work works={works}/>
      </Experience>

      <Technologies>
        <h2>technologies</h2>
        <div className="tech-stack">
          <SiJavascript />
          <SiReact />
          <SiSass />
          <SiNextDotJs />
          <SiGraphql />
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