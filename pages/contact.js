import React from "react";
import { FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import styled from "styled-components";
import CustomCta from "../components/custom/CustomCta";
import ToastMessage from "../components/ToastMessage";
import useForm from "../hooks/useForm";

const StyledContactPage = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  position: relative;

  h3 {
    color: var(--fg-lighter);
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;

    svg {
      color: var(--accent-color-primary);
    }
  }

  .quick-message-form {
    width: 20rem;
    height: fit-content;
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.85rem;

    label {
      font-size: 0.85rem;
    }

    input,
    textarea {
      font-family: var(--font-secondary);
      font-size: 1rem;
      padding: 0.3rem 0.5rem;
      border: 1px solid var(--fg-lightest);
      border-radius: 0.5rem;

      &::placeholder {
        color: var(--fg-lightest);
      }
    }

    #dispatch-btn {
      width: 5rem;
      margin: 0 auto;
      border-radius: 0.5rem;
      box-shadow: var(--box-shadow);
      background-color: var(--accent-color-secondary);

      &:hover {
        box-shadow: var(--hover-box-shadow);
      }
    }

    .error-msg {
      text-align: center;
      color: #ff3333;
      font-weight: 500;
      font-size: 0.85rem;
    }
  }

  .error-response {
    text-align: center;
    color: #ff3333;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.5rem 0;
  }
`;

const contact = () => {
  const {
    formData,
    handleInput,
    handleFormSubmit,
    serverState,
    renderErrorMsg,
  } = useForm();

  return (
    <StyledContactPage>
      <h3>reach out on below channels</h3>
      <div className="links">
        <CustomCta href="mailto:sanjibdey.dey4@gmail.com" aria-label="Email">
          Drop a mail <FiMail aria-hidden="true" />
        </CustomCta>
        <CustomCta
          href="https://twitter.com/Sanjib_104"
          rel="noreferrer"
          target="_blank"
          aria-label="Twitter"
        >
          Nudge the bird <FiTwitter aria-hidden="true" />
        </CustomCta>
        <CustomCta
          href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/"
          rel="noreferrer"
          target="_blank"
        >
          Forge a link <FiLinkedin aria-hidden="true" />
        </CustomCta>
      </div>

      <h3>or maybe drop a quick message</h3>

      <div className="quick-message">
        <form
          className="quick-message-form"
          onSubmit={handleFormSubmit}
          noValidate
        >
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Bond, James Bond"
            value={formData.name}
            onChange={handleInput}
            aria-label="name"
          />
          {renderErrorMsg("name")}
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="bond007@mi6.com"
            value={formData.email}
            onChange={handleInput}
            aria-label="email"
          />
          {renderErrorMsg("email")}
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Can I have one Vesper Martini, please? Shaken, not stirred."
            name="message"
            value={formData.message}
            onChange={handleInput}
            aria-label="message"
          ></textarea>
          {renderErrorMsg("message")}
          <button
            type="submit"
            id="dispatch-btn"
            disabled={serverState.submitting}
            aria-label="form submit button"
          >
            Dispatch
          </button>
        </form>
        {serverState.status && <ToastMessage serverState={serverState} />}
      </div>
    </StyledContactPage>
  );
};

export default contact;
