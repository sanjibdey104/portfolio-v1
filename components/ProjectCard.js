import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const StyledProjectCard = styled.li`
  width: 100%;
  margin: 0 auto;
  height: 18rem;
  position: relative;
  border-radius: 0.5rem;
  line-height: 1.5;

  transition: transform 200ms ease-in-out;
  transform-origin: center;
  cursor: pointer;

  &:hover .card-layer-two {
    transform: rotate(7deg);
  }
  &:hover .card-layer-three {
    transform: rotate(12deg);
  }

  .project-link {
    color: var(--fg-light);
    font-size: 0.85rem;
    font-weight: 500;
    border-bottom: 1px solid var(--bg-light);
    transition: all 200ms ease-in-out;

    display: flex;
    align-items: center;
    position: relative;

    svg {
      font-size: 1.3rem;
      position: absolute;
      right: -1.5rem;
    }
  }

  &:hover .project-link {
    color: var(--accent-color-primary);
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
    background-color: var(--bg-light);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5), inset 0 0 8px #ced4da;
  }

  #title {
    color: var(--accent-color-primary);
    font-size: clamp(1.3rem, 2vw, 1.5rem);
  }

  #description {
    text-align: center;
    font-family: var(--font-secondary);
    font-size: 0.9rem;
    color: var(--fg-light);
  }

  .card-layer-two,
  .card-layer-three {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    transition: transform 200ms ease-in-out;
  }

  .card-layer-two {
    z-index: -1;
    transform: rotate(5deg);
    background-color: var(--accent-color-primary);
  }

  .card-layer-three {
    z-index: -2;
    transform: rotate(8deg);
    background-color: #ffba08;
  }
`;

const ProjectCard = ({ projectDetails }) => {
  const { title, slug, description } = projectDetails;
  console.log(projectDetails.unikey);

  return (
    <Link href={`/projects/${slug}`}>
      <a aria-label="project page link">
        <StyledProjectCard className="project-card">
          <div className="card-layer-one">
            <h3 id="title">{title}</h3>
            <p id="description">{description}</p>
            <p className="project-link">
              learn more <BsArrowRightShort />
            </p>
          </div>
          <div className="card-layer-two"></div>
          <div className="card-layer-three"></div>
        </StyledProjectCard>
      </a>
    </Link>
  );
};

export default ProjectCard;
