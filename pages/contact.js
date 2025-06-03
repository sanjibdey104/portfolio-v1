import { FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import styled from "styled-components";
import ContactForm from "../components/custom/ContactForm";
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

  /* .quick-message-form {
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
  } */

  .error-response {
    text-align: center;
    color: #ff3333;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.5rem 0;
  }
`;

const contact = () => {
  const { serverState } = useForm();

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
      <ContactForm />
    </StyledContactPage>
  );
};

export default contact;
