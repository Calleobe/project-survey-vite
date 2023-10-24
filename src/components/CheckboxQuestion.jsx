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
      <p>{question.text}</p>
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
