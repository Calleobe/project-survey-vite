export const DropdownQuestion = ({ question, answer, onAnswerChange }) => {
  return (
    <div>
      <h2>{question.text}</h2>
      <select value={answer} onChange={(e) => onAnswerChange(e.target.value)}>
        {question.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
