
import { useState } from "react";
import "./SubmitForm.scss";

export const SubmitForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [radioButton, setRadioButton] = useState("");
  const [focused, setFocused] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    setName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setRadioButton("");
  };

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <form
      action=""
      className="form-section"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="form-section__input__body">
        <div className="form-section__input__container">
          <label
            htmlFor="name"
            className="form-section__input__label"
            style={focused ? { color: "#000" } : {color: "#8d8d8d"}}
          >
            First Name
          </label>
          <input
            type="text"
            className="form-section__input"
            id="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            onFocus={handleFocus}
          />
        </div>
        <div className="form-section__input__container">
          <label
            htmlFor="surname"
            className="form-section__input__label"
            style={focused ? { color: "#000" } : {color: "#8d8d8d"}}
          >
            Last Name
          </label>
          <input
            type="text"
            className="form-section__input"
            id="surname"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            onFocus={handleFocus}
          />
        </div>
      </div>
      <div className="form-section__input__body">
        <div className="form-section__input__container">
          <label
            htmlFor="email"
            className="form-section__input__label"
            style={focused ? { color: "#000" } : {color: "#8d8d8d"}}
          >
            Email
          </label>
          <input
            type="email"
            className="form-section__input"
            id="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onFocus={handleFocus}
          />
        </div>
        <div className="form-section__input__container">
          <label
            htmlFor="phoneNum"
            className="form-section__input__label"
            style={focused ? { color: "#000" } : {color: "#8d8d8d"}}
          >
            Phone Number
          </label>
          <input
            type="tel"
            className="form-section__input"
            id="phoneNum"
            required
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            onFocus={handleFocus}
          />
        </div>
      </div>
      <div className="form-section__select">
        <h2 className="form-section__select__header">Select Subject?</h2>
        <ul className="form-section__select__container">
          <li className="form-section__select__body">
            <div className="form-section__select__option__container">
              <input
                type="radio"
                name="options"
                className="form-section__select__input"
                id="option1"
                checked={radioButton === "option1"}
                value="option1"
                onChange={(event) => setRadioButton(event.target.value)}
              />
              <label htmlFor="option1" className="form-section__select__label">
                General Inquiry
              </label>
            </div>
            <div className="form-section__select__option__container">
              <input
                type="radio"
                name="options"
                className="form-section__select__input"
                id="option2"
                checked={radioButton === "option2"}
                value="option2"
                onChange={(event) => setRadioButton(event.target.value)}
              />
              <label htmlFor="option2" className="form-section__select__label">
                General Inquiry
              </label>
            </div>
          </li>
          <li className="form-section__select__body">
            <div className="form-section__select__option__container">
              <input
                type="radio"
                name="options"
                className="form-section__select__input"
                id="option3"
                checked={radioButton === "option3"}
                value="option3"
                onChange={(event) => setRadioButton(event.target.value)}
              />
              <label htmlFor="option3" className="form-section__select__label">
                General Inquiry
              </label>
            </div>
            <div className="form-section__select__option__container">
              <input
                type="radio"
                name="options"
                className="form-section__select__input"
                id="option4"
                checked={radioButton === "option4"}
                value="option4"
                onChange={(event) => setRadioButton(event.target.value)}
              />
              <label htmlFor="option4" className="form-section__select__label">
                General Inquiry
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="form-section__msg_field__container">
        <label
          htmlFor="message"
          className="form-section__input__label"
          style={message ? { color: "#000" } : {color: "#8d8d8d"}}
        >
          Message
        </label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          name="message"
          id="message"
          className="form-section__msg_field"
          maxLength={400}
          placeholder="Write your message.."
        ></textarea>
      </div>
      <div className="form-section__button--with--plane__container">
        <button type="submit" className="form-section__button">
          Send Message
        </button>
        <div className="form-section__plane" />
      </div>
    </form>
  );
};