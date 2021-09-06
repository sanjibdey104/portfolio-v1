import React from "react";
import styled from "styled-components";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiNextDotJs,
  SiGraphql,
  SiFirebase,
} from "react-icons/si";

const StyledTechStack = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  list-style: none;

  li {
    font-size: 0.85rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    font-size: 1.75rem;
    color: var(--fg-light);
  }
`;

const TechStack = () => {
  return (
    <StyledTechStack>
      <li>
        <SiHtml5 />
        HTML5
      </li>
      <li>
        <SiCss3 /> CSS3
      </li>
      <li>
        <SiSass /> SASS
      </li>
      <li>
        <SiJavascript />
        JavaScript
      </li>
      <li>
        <SiReact />
        React.js
      </li>
      <li>
        <SiNextDotJs />
        Next.js
      </li>
      <li>
        <SiGraphql />
        GraphQL
      </li>
      <li>
        <SiFirebase />
        Firebase
      </li>
    </StyledTechStack>
  );
};

export default TechStack;
