import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledToastMessage = styled.div`
  width: 15rem;
  height: 2rem;

  position: fixed;
  top: 50%;
  right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 500;
  color: white;

  transform: translateX(120%);
  transition: transform 200ms ease-in-out;

  &.error-response {
    background-color: #ff3333;
  }

  &.success-response {
    background-color: #5cb85c;
  }

  &#show {
    transform: translateX(0);
  }
`;

const ToastMessage = ({ serverState }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);
    const toastTimeout = setTimeout(() => {
      setShowToast(false);
    }, 3000);
    return () => {
      clearTimeout(toastTimeout);
    };
  }, []);

  return (
    <StyledToastMessage
      id={showToast ? "show" : null}
      className={
        serverState.status.isSubmitSuccessful
          ? "success-response"
          : "error-response"
      }
    >
      {serverState.status.msg}
    </StyledToastMessage>
  );
};

export default ToastMessage;
