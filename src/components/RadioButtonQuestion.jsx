export const RadioButtonQuestion = ({ question, answer, onAnswerChange }) => {
  return (
    <div>
      <h3>{question.text}</h3>
      {question.options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={answer === option}
            onChange={() => onAnswerChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};
