export const TextInputQuestion = ({ question, answer, onAnswerChange }) => {
  return (
    <div>
      <label>{question.text}</label>
      <input
        type="text"
        value={answer || ""} // Ensure it's always a string and never undefined
        onChange={(e) => onAnswerChange(e.target.value)}
      />
    </div>
  );
};
