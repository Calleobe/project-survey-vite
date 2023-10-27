import React, { useState } from "react";

const emailValidation = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

export const NewsletterQuestion = ({
  questionText,
  answer,
  onAnswerChange,
}) => {
  const [email, setEmail] = useState("");

  const handleRadioChange = (selection) => {
    onAnswerChange(selection);
    if (selection === "No") {
      setEmail("");
    } else if (selection === "Yes" && email) {
      // Also pass the email when "Yes" is selected and an email is available
      onAnswerChange(email);
    }
  };

  const handleEmailChange = (e) => {
    const updatedEmail = e.target.value;
    setEmail(updatedEmail);

    if (emailValidation(updatedEmail)) {
      // Pass the email back to SurveyApp if it's valid
      onAnswerChange(updatedEmail);
    }
  };

  const handleEmailBlur = () => {
    if (email && !emailValidation(email)) {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div>
      <h3>{questionText}</h3> {/* Display the question text */}
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
      {answer === "Yes" && (
        <div>
          <label>
            Enter your email:
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              placeholder="example@email.com"
            />
          </label>
        </div>
      )}
    </div>
  );
};
