export const CheckboxQuestion = ({ question, answer = [], onAnswerChange }) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      onAnswerChange([...answer, value]);
    } else {
      onAnswerChange(answer.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h3>{question.text}</h3>
      {question.options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`option-${index}`}
            value={option}
            checked={answer.includes(option)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
};
