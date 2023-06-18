import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// React Scroll
import { Element } from "react-scroll";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const [formError, setFormError] = useState();
  const [formSuccess, setFormSuccess] = useState();

  function validateEmail(email) {
    const regEX = /\S+@\S+\.\S+/;
    const patternMatches = regEX.test(email);
    return patternMatches;
  }

  const validateForm = () => {
    if (formData.from_name.length === 0) {
      setFormError("ERROR! Please fill in your name");
      setTimeout(() => {
        setFormError(null);
      }, 5000);
      return false;
    } else if (!validateEmail(formData.reply_to)) {
      setFormError("ERROR! Please fill a valid email address");
      setTimeout(() => {
        setFormError(null);
      }, 5000);
      return false;
    } else if (formData.message.length === 0) {
      setFormError("ERROR! Textarea cannot be empty");
      setTimeout(() => {
        setFormError(null);
      }, 5000);
      return false;
    } else {
      return true;
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          "service_2nikw8c",
          "template_8grr5l1",
          formData,
          "tyQsw42PGJK3QoaV-"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormSuccess("Your message has successfully been sendt!");
          setFormData({ from_name: "", reply_to: "", message: "" });
          setTimeout(() => {
            setFormSuccess(null);
          }, 5000);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    }
  };

  return (
    <>
      <Element name="contact"></Element>

      <div className="contact_container">
        <h1 className="contact_h1">Contact</h1>
        <h2 className="contact_h2">me</h2>
      </div>
      <div className="contact_box">
        {" "}
        <div className="form-container">
          {formError && <p className="setFormError">{formError}</p>}
          {formSuccess && <p className="setFormSuccess">{formSuccess}</p>}
          <form onSubmit={onSubmit}>
            <input
              className="form_input"
              type="text"
              id="name"
              name="from_name"
              placeholder="Name"
              value={formData.from_name}
              onChange={handleChange}
            ></input>

            <input
              className="form_input"
              type="text"
              id="email"
              name="reply_to"
              placeholder="Email"
              value={formData.reply_to}
              onChange={handleChange}
            ></input>

            <textarea
              className="form_input"
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              className="form-button"
              type="submit"
              id="button"
              value="Submit"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
