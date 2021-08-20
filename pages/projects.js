import React from "react";
import { getPortfolioData } from "../lib/data";
import Projects from "../components/Projects";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import CustomCta from "../components/custom/CustomCta";

const ProjectsPage = styled(motion.section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;

  h2 {
    color: ${({ theme }) => theme.textColor};
    font-size: 2.5rem;
  }

  .github-link {
    width: 18rem;
    font-size: 1rem;

    svg {
      font-size: 1.75rem;
    }
  }
`;

function projects({ projectsData }) {
  const { projects } = projectsData;
  return (
    <ProjectsPage>
      <h2>Stuff I've worked on...</h2>
      <Projects projects={projects} />
      <CustomCta
        id="github-link"
        href="https://github.com/sanjibdey104"
        className="github-link"
        rel="noreferrer"
        target="_blank"
      >
        <SiGithub />
        <span>Head to the hub for more</span>
      </CustomCta>
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
