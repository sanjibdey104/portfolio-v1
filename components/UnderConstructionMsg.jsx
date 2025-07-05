import { FiTool } from "react-icons/fi";
import styled from "styled-components";

const StyledUnderConstructionMsg = styled.div`
  margin: 1rem 0;
  padding-left: 1rem;
  border-left: 5px solid red;

  align-items: center;
  gap: 5px;

  font-size: 0.8rem;
  font-weight: 500;
  color: var(--fg-deep);

  svg {
    flex-shrink: 0;
    display: inline-block;
    margin-right: 5px;
  }
`;

const UnderConstructionMsg = () => {
  return (
    <StyledUnderConstructionMsg>
      <FiTool /> THIS IS A NEW VERSION. UPDATE IS STILL IN PROGRESS. PLEASE
      VISIT AGAIN FOR FINAL VERSION.
    </StyledUnderConstructionMsg>
  );
};

export default UnderConstructionMsg;
