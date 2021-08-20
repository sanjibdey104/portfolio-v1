import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const StyledProjectCard = styled.li`
  width: 100%;
  margin: 0 auto;
  height: 18rem;
  position: relative;
  border-radius: 0.5rem;
  line-height: 1.6;

  transition: transform 200ms ease-in-out;
  transform-origin: center;
  cursor: pointer;

  &:hover .card-layer-two {
    transform: rotate(5deg);
  }
  &:hover .card-layer-three {
    transform: rotate(10deg);
  }

  .project-tour-link {
    font-family: var(--font-secondary);
    font-size: 1.1rem;
    border-bottom: 2px solid ${({ theme }) => theme.backgroundColor};

    display: flex;
    align-items: center;
    gap: 0.2rem;
    transform: translateX(15%);

    svg {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.accentColor};
      opacity: 0;
      transform: translateX(-45%);
      transition: all 200ms ease-in-out;
    }
  }

  &:hover .project-tour-link {
    color: ${({ theme }) => theme.accentColor};
    svg {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .card-layer-one {
    height: 100%;
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.backgroundColor};
    box-shadow: 0 0 8px ${({ theme }) => theme.layerShadow};
  }

  #title {
    color: ${({ theme }) => theme.accentColor};
    font-size: clamp(1.3rem, 2vw, 1.5rem);
  }

  #description {
    text-align: center;
    font-family: var(--font-secondary);
    color: ${({ theme }) => theme.smText};
  }

  .card-layer-two,
  .card-layer-three {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.accentColor};
    box-shadow: 0 0 5px ${({ theme }) => theme.layerShadow};
    transition: transform 200ms ease-in-out;
  }

  .card-layer-two {
    z-index: -1;
    transform: rotate(3deg);
  }

  .card-layer-three {
    z-index: -2;
    transform: rotate(6deg);
    background-color: #ffba08;
  }
`;

const ProjectCard = ({ projectDetails }) => {
  const { title, slug, description } = projectDetails;

  return (
    <Link href={`/projects/${slug}`}>
      <StyledProjectCard className="project-card">
        <div className="card-layer-one">
          <h3 id="title">{title}</h3>
          <p id="description">{description}</p>
          <a href="#" className="project-tour-link">
            learn more
            <MdKeyboardArrowRight />
            <MdKeyboardArrowRight />
          </a>
        </div>
        <div className="card-layer-two"></div>
        <div className="card-layer-three"></div>
      </StyledProjectCard>
    </Link>
  );
};

export default ProjectCard;
