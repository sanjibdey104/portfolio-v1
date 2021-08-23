import axios from "axios";
import { useState } from "react";

const useForm = () => {
  const defaultFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState({});
  const defaultServerState = { submitting: false, status: null };
  const [serverState, setServerState] = useState(defaultServerState);

  const handleServerResponse = (isSubmitSuccessful, msg) => {
    if (isSubmitSuccessful) {
      setErrors({});
      setFormData(defaultFormData);
    }
    setServerState({ submitting: false, status: { isSubmitSuccessful, msg } });
  };

  const regexValidations = {
    email:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    name: /^[a-zA-Z\s]*[^\s]$/gim,
    message: /^[\w\d][^<>/\\&]*$/gim,
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderErrorMsg = (field) => {
    if (errors[field]) return <p className="error-msg">{errors[field]}</p>;
  };

  const validateInputs = () => {
    const inputs = Object.keys(formData);
    inputs.forEach((input) => {
      if (!formData[input]) {
        errors[input] = `Your ${input} is required`;
      } else if (!regexValidations[input].test(formData[input])) {
        errors[input] = `Please enter a valid ${input}`;
      } else {
        errors[input] = "";
      }
    });
    setErrors((prevState) => ({ ...prevState, ...errors }));
    return Object.values(errors).filter(Boolean).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/f/xeqvrwep",
      data: formData,
    })
      .then((res) => handleServerResponse(true, "Thank you for the message"))
      .catch((res) => handleServerResponse(false, res.response.data.error));
  };

  return {
    formData,
    handleInput,
    handleFormSubmit,
    errors,
    serverState,
    renderErrorMsg,
  };
};

export default useForm;
