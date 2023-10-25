import React, { useState } from "react";
import { RadioButtonQuestion } from "./RadioButtonQuestion.jsx";
import { DropdownQuestion } from "./DropdownQuestion.jsx";
import { TextInputQuestion } from "./TextInputQuestion.jsx";
import { CheckboxQuestion } from "./CheckboxQuestion.jsx";
import { RangeSliderQuestion } from "./RangeSliderQuestion.jsx";
import { NewsletterQuestion } from "./NewsletterQuestion.jsx";
import { Progress } from "./Progress";
import { Summary } from "./Summary.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "../styles/SurveyApp.css";

export const SurveyApp = () => {
  const [section, setSection] = useState(0); // Keeps track of which question is currently displayed
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      type: "range",
      text: "On a scale from 1 to 10, how would you rate your knowledge of JavaScript?",
    },
    {
      type: "radio",
      text: "Have you researched the freelance market for JavaScript programmers?",
      options: ["Yes", "No", "Somewhat"],
    },
    {
      type: "dropdown",
      text: "Do you have a consultant CV tailored for JavaScript projects?",
      options: ["Yes", "No", "In progress"],
    },
    {
      type: "radio",
      text: "Have you sent your CV to brokers to gauge the market?",
      options: ["Yes", "No", "Somewhat"],
    },
    {
      type: "radio",
      text: "Do you have a plan for managing bookkeeping?",
      options: ["Yes", "No", "Somewhat"],
    },
    {
      type: "text",
      text: "Have you chosen a business name and set up a business account? (Please specify the name)",
    },
    {
      type: "checkbox",
      text: "Which of these tasks have you completed?",
      options: [
        "Registered business",
        "Aware of tax obligations",
        "Resignation ready",
        "Strategy for projects",
      ],
    },
    {
      type: "radio",
      text: "Are you prepared for client interviews and contract negotiations?",
      options: ["Yes", "No", "Somewhat"],
    },
    {
      type: "radio",
      text: "Do you have a portfolio demonstrating your JavaScript skills and completed projects?",
      options: ["Yes", "No", "In progress"],
    },
    {
      type: "newsletter",
      text: "Would you like to receive the latest tips, trends, and opportunities in the world of freelancing? Subscribe to our newsletter and stay ahead in your freelancing journey. Your success is our mission! 🚀",
    },
  ];

  const handleAnswerChange = (index, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: answer,
    }));
  };

  const isAnswered = () => {
    const currentQuestion = questions[section];

    if (!currentQuestion) {
      return false;
    }

    if (currentQuestion.type === "checkbox") {
      return (
        answers[section] && Object.values(answers[section]).some((val) => val)
      );
    }

    return !!answers[section];
  };

  const handleNext = () => {
    // No need to check if it's the last question, just increment
    setSection((prev) => prev + 1);
  };

  return (
    <div className="SurveyContainer">
      <Header />
      <Progress
        current={Object.values(answers).filter(Boolean).length}
        total={questions.length}
      />
      {questions.map((question, index) => (
        <div
          key={index}
          className="QuestionContainer" // <-- This class is for the animation
          style={{ display: section === index ? "block" : "none" }}
        >
          <div className="Answer">
            {question.type === "radio" && (
              <RadioButtonQuestion
                question={question}
                answer={answers[index]}
                onAnswerChange={(answer) => handleAnswerChange(index, answer)}
              />
            )}
            {question.type === "dropdown" && (
              <DropdownQuestion
                question={question}
                answer={answers[index]}
                onAnswerChange={(answer) => handleAnswerChange(index, answer)}
              />
            )}
            {question.type === "text" && (
              <TextInputQuestion
                question={question}
                answer={answers[index]}
                onAnswerChange={(answer) => handleAnswerChange(index, answer)}
              />
            )}
            {question.type === "checkbox" && (
              <CheckboxQuestion
                question={question}
                answer={answers[index]}
                onAnswerChange={(answer) => handleAnswerChange(index, answer)}
              />
            )}
            {question.type === "range" && (
              <RangeSliderQuestion
                question={question}
                answer={answers[index]}
                onAnswerChange={(answer) => handleAnswerChange(index, answer)}
              />
            )}
            {question.type === "newsletter" && (
              <NewsletterQuestion
                questionText={question.text} // Pass the question text
                answer={answers[index]}
                onAnswerChange={(selection) => {
                  handleAnswerChange(index, selection);
                  if (selection === "Yes") {
                    handleAnswerChange(index + "_email", email);
                  }
                }}
              />
            )}
          </div>
        </div>
      ))}

      {isAnswered() && <button onClick={handleNext}>Next</button>}

      {section === questions.length && (
        <Summary questions={questions} answers={answers} />
      )}
      <Footer />
    </div>
  );
};
