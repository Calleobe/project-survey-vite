import React, { useState } from "react";
import "../styles/NewsletterQuestion.css";

const emailValidation = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

export const NewsletterQuestion = ({
  questionText,
  answer,
  onAnswerChange,
  storedEmail,
}) => {
  const [emailState, setEmailState] = useState({
    email: storedEmail || "",
    isEmailValid: emailValidation(storedEmail || ""),
    isSubmitted: false,
  });

  const handleRadioChange = (selection) => {
    // If changing answer to "No" after having submitted an email, reset submission
    if (selection === "No" && emailState.isSubmitted) {
      setEmailState({
        email: "",
        isEmailValid: false,
        isSubmitted: false,
      });
    } else {
      // Reset isSubmitted when changing the answer
      setEmailState((prevState) => ({
        ...prevState,
        isSubmitted: false,
      }));
    }
    onAnswerChange(selection);
  };

  const handleEmailChange = (updatedEmail) => {
    setEmailState((prevState) => ({
      ...prevState,
      email: updatedEmail,
      isEmailValid: emailValidation(updatedEmail) || updatedEmail === "",
    }));
  };

  const handleSubmission = () => {
    if (!emailState.isSubmitted && emailState.isEmailValid) {
      setEmailState((prevState) => ({
        ...prevState,
        isSubmitted: true,
      }));
      onAnswerChange(emailState.email); // Call the callback with the valid email
    }
  };

  return (
    <div>
      <h3>{questionText}</h3>
      <div>
        <label>
          <input
            type="radio"
            value="Yes"
            checked={answer === "Yes"}
            onChange={() => handleRadioChange("Yes")}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="No"
            checked={answer === "No"}
            onChange={() => handleRadioChange("No")}
          />
          No
        </label>
      </div>
      {answer === "Yes" && !emailState.isSubmitted && (
        <div>
          <label className="EmailLabel">
            Enter your email:
            <input
              type="text"
              value={emailState.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="example@email.com"
              className="InputEmail"
            />
          </label>
          <button
            onClick={handleSubmission}
            disabled={!emailState.isEmailValid || emailState.email === ""}
            style={{ marginTop: "10px" }}
            className="SubmitButton"
          >
            Submit
          </button>
          {!emailState.isEmailValid && (
            <p style={{ color: "red", marginLeft: "5px" }}>
              Please enter a valid email address.
            </p>
          )}
        </div>
      )}
      {emailState.isSubmitted && (
        <p style={{ color: "green", marginLeft: "5px" }}>
          Successfully subscribed!
        </p>
      )}
    </div>
  );
};
