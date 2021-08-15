import React from "react";
import { getPortfolioData } from "../lib/data";
import Projects from "../components/Projects";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

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
    color: ${({ theme }) => theme.backgroundColor};
    background-color: ${({ theme }) => theme.textColor};
    border: 2px solid ${({ theme }) => theme.textColor};

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.5rem;
    transition: all 200ms ease-in-out;

    svg {
      font-size: 1.75rem;
    }

    &:hover {
      color: ${({ theme }) => theme.textColor};
      background-color: ${({ theme }) => theme.backgroundColor};
    }
  }
`;

function projects({ projectsData }) {
  const { projects } = projectsData;
  return (
    <ProjectsPage initial={{ y: 50 }} animate={{ y: 0 }}>
      <h2>Projects in spotlight</h2>
      <Projects projects={projects} />
      <a
        href="https://github.com/sanjibdey104"
        className="github-link"
        rel="noreferrer"
        target="_blank"
      >
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
