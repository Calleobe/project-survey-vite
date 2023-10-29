import {
  suggestions_map,
  checkbox_suggestions,
  checkbox_unchecked_suggestions,
  getJsKnowledgeSuggestion,
} from "./SuggestionsMap";

export const Summary = ({ questions, answers }) => {
  return (
    <div>
      <h2>Summary:</h2>
      {questions.map((question, index) => {
        if (question.type === "radio" || question.type === "dropdown") {
          const suggestion = suggestions_map[question.text][answers[index]];
          return (
            <div key={index}>
              <strong>{question.text}</strong>: {answers[index]}
              <p>{suggestion}</p>
            </div>
          );
        } else if (question.type === "checkbox") {
          return (
            <div key={index}>
              <strong>{question.text}</strong>:
              <ul>
                {question.options.map((option) => {
                  const answerExists =
                    answers[index] && answers[index].includes(option);
                  return (
                    <li key={option}>
                      {option}: {answerExists ? "Yes" : "No"}
                      <br />
                      {answerExists
                        ? checkbox_suggestions[option]
                        : checkbox_unchecked_suggestions[option]}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        } else if (question.type === "range") {
          const knowledgeSuggestions = getJsKnowledgeSuggestion(answers[index]);
          return (
            <div key={index}>
              <strong>{question.text}</strong>:
              <p>Selected Value: {answers[index]}</p>
              <p>
                <strong>Suggestion Level: </strong>
                {knowledgeSuggestions.level}
              </p>
              <ul>
                {knowledgeSuggestions.suggestions.map((suggestion, sIndex) => (
                  <li key={sIndex}>{suggestion}</li>
                ))}
              </ul>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <strong>{question.text}</strong>: {answers[index]}
            </div>
          );
        }
      })}
    </div>
  );
};
