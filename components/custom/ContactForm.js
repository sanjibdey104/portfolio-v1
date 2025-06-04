import styled from "styled-components";
import useForm from "../../hooks/useForm";
import ToastMessage from "../ToastMessage";

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  input,
  textarea {
    padding: 12px 16px;
    border: 1px solid #f3f3f3;

    font-size: 1rem;
    background-color: #f3f3f3;

    &::placeholder {
      color: var(--fg-lighter);
    }

    &:hover,
    &:focus,
    &:focus-within,
    &:focus-visible {
      border: 1px solid var(--fg-lighter);
      outline: 1px solid var(--fg-lighter);
    }
  }

  .submit-button {
    margin-left: auto;
    width: 120px;
    height: 40px;
    color: #fff;
    background-color: var(--fg-bold);

    &:hover {
      color: var(--fg-lightest);
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
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInput}
          aria-label="name"
        />
        {renderErrorMsg("name")}

        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInput}
          aria-label="email"
        />
        {renderErrorMsg("email")}

        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Your message"
          value={formData.message}
          onChange={handleInput}
          aria-label="message"
        ></textarea>
        {renderErrorMsg("message")}

        <button
          type="submit"
          className="submit-button"
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
