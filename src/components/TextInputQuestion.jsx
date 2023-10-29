import "../styles/TextInput.css";

export const TextInputQuestion = ({ question, answer, onAnswerChange }) => {
  return (
    <div className="TextInputContainer"> {/* Add a container for styling */}
      <h3>{question.text}</h3>
      <textarea
        value={answer || ""}
        onChange={(e) => onAnswerChange(e.target.value)}
        placeholder="Write your business name here, required"
      />
    </div>
  );
};
