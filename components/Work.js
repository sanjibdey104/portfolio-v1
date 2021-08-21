import React, { useState } from "react";
import styled from "styled-components";

const WorkComponent = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 2rem;
  padding-block: 1rem;
  font-size: 1.1rem;
  font-family: var(--font-secondary);
  color: ${({ theme }) => theme.fgLight};

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .company-list {
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: row;
    }

    li {
      height: 2.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;

      font-size: 0.85rem;
      font-family: var(--font-primary);
      font-weight: 500;
      padding: 0.5rem;
      color: ${({ theme }) => theme.fgLighter};
      transition: all 200ms ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.accentColor};
      }

      &.active {
        color: ${({ theme }) => theme.accentColor};
        border-left: 2px solid ${({ theme }) => theme.accentColor};

        @media screen and (max-width: 768px) {
          border: 0;
          border-bottom: 2px solid ${({ theme }) => theme.accentColor};
        }
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
      font-size: 1.45rem;
      span {
        font-weight: 500;
      }
    }

    .duration {
      font-size: 1rem;
      font-family: inherit;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.fgLighter};
    }

    #company {
      color: ${({ theme }) => theme.accentColor};
    }

    ul {
      li {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        position: relative;
        padding-left: 1.5rem;

        &:before {
          content: "▹";
          display: inline;
          position: absolute;
          left: 0;
          color: ${({ theme }) => theme.accentColor};
          font-size: 1.3rem;
          line-height: 1;
        }
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
