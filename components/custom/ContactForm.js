import styled from "styled-components";
import useForm from "../../hooks/useForm";
import ToastMessage from "../ToastMessage";

const StyledContactForm = styled.form`
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

  .error-response {
    text-align: center;
    color: #ff3333;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.5rem 0;
  }
`;

const ContactForm = (props) => {
  const {
    formData,
    handleInput,
    handleFormSubmit,
    serverState,
    renderErrorMsg,
  } = useForm();

  return (
    <div>
      <StyledContactForm onSubmit={handleFormSubmit} noValidate {...props}>
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
      </StyledContactForm>
      {serverState.status && <ToastMessage serverState={serverState} />}
    </div>
  );
};

export default ContactForm;
