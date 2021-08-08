import { motion } from "framer-motion";
import React from "react";
import { SiGithub } from "react-icons/si";
import styled from "styled-components";
import Projects from "../components/Projects";
import { getPortfolioData } from "../lib/data";

const ProjectsPage = styled(motion.section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;

  .github-link {
    width: 18rem;
    border: 0.5rem;
    border-radius: 0.5rem;
    padding: 0.3rem;
    margin-top: 2rem;

    font-size: 1rem;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.mobileNav};
    box-shadow: 0 0 3px ${({ theme }) => theme.accentColor};

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.5rem;

    svg {
      font-size: 1.75rem;
      transition: transform 300ms ease-in-out;
    }

    &:hover {
      box-shadow: 0 0 5px ${({ theme }) => theme.accentColor};
      svg {
        transform: rotate(360deg);
      }
    }
  }
`;

function projects({ projectsData }) {
  const { projects } = projectsData;
  return (
    <ProjectsPage initial={{ y: 50 }} animate={{ y: 0 }}>
      <h2>Projects in spotlight</h2>
      <Projects projects={projects} />
      <a href="https://github.com/sanjibdey104" className="github-link">
        <SiGithub />
        <span>Head to the hub for more</span>
      </a>
    </ProjectsPage>
  );
}

export const getStaticProps = async () => {
  const { projectsData } = await getPortfolioData();

  return {
    props: {
      projectsData,
    },
  };
};

export default projects;
