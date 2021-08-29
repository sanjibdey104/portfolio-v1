import React, { useState } from "react";
import styled from "styled-components";

const WorkComponent = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 2rem;
  font-family: var(--font-secondary);

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .company-list {
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: row;
    }

    li {
      height: 2.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;

      font-size: 0.9rem;
      font-family: var(--font-primary);
      font-weight: 500;
      padding: 0.75rem;
      color: var(--fg-lighter);
      transition: all 200ms ease-in-out;

      &:hover {
        color: var(--accent-color-primary);
      }

      &.active {
        color: var(--accent-color-primary);
        border-left: 2px solid var(--accent-color-primary);

        @media screen and (max-width: 768px) {
          border: 0;
          border-bottom: 2px solid var(--accent-color-primary);
        }
      }

      &:nth-child(2)::before {
        content: "👈";
        position: absolute;
        top: -1rem;
        right: 15%;
        transform: rotate(-30deg);
        font-size: 1.1rem;
      }

      &:nth-child(2)::after {
        content: "👈";
        position: absolute;
        bottom: -1.5rem;
        right: 15%;
        transform: rotate(30deg);
        font-size: 1.1rem;
      }
    }
  }

  .job-desc {
    width: 75%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 100%;
    }

    .position {
      margin-bottom: 0.5rem;
      font-size: 1.35rem;
      color: var(--fg-bold);
      font-weight: 500;

      #company {
        color: var(--accent-color-primary);
      }
    }

    .duration {
      font-size: 0.9rem;
      margin-bottom: 2rem;
      color: var(--fg-lighter);
    }

    li {
      margin-bottom: 1rem;
      position: relative;
      padding-left: 1.5rem;

      &:before {
        content: "▹";
        display: inline;
        position: absolute;
        left: 0;
        color: var(--accent-color-primary);
        font-size: 1.5rem;
        line-height: 1.1;
      }
    }
  }
`;

const Work = ({ works }) => {
  const [indexValue, setIndexValue] = useState(0);
  const companies = works.map((work) => work.company);
  const { company, position, duration, responsibilities } = works[indexValue];

  return (
    <WorkComponent>
      <ul className="company-list">
        {companies.map((company, index) => {
          let id = Math.random();
          return (
            <li
              key={id}
              onClick={() => setIndexValue(index)}
              className={index === indexValue ? "active" : ""}
            >
              {company}
            </li>
          );
        })}
      </ul>

      <div className="job-desc">
        <div className="position">
          <span>{position}</span> @ <span id="company">{company}</span>
        </div>
        <p className="duration">{duration}</p>
        <ul>
          {responsibilities.map((res) => {
            let unikey = Math.random();
            return <li key={unikey}>{res}</li>;
          })}
        </ul>
      </div>
    </WorkComponent>
  );
};

export default Work;
