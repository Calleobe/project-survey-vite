export const Summary = ({ questions, answers }) => {
  return (
    <div>
      <h2>Summary:</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <strong>{question.text}</strong>:
          {question.type === "checkbox"
            ? answers[index]
                .map((option) => <span key={option}>{option}</span>)
                .reduce((prev, curr) => [prev, ", ", curr])
            : answers[index]}
        </div>
      ))}
    </div>
  );
};
