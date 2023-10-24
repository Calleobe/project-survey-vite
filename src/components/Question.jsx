export const Question = ({ data, answer, onAnswerChange }) => {
  const { text, type, options } = data;

  let input;
  switch (type) {
    case "radio":
      input = options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={text}
            value={option}
            checked={answer === option}
            onChange={(e) => onAnswerChange(text, e.target.value)}
          />
          {option}
        </label>
      ));
      break;
    case "select":
      input = (
        <select
          value={answer}
          onChange={(e) => onAnswerChange(text, e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
      break;
    case "range":
      input = (
        <input
          type="range"
          min={options[0]}
          max={options[1]}
          value={answer}
          onChange={(e) => onAnswerChange(text, e.target.value)}
        />
      );
      break;
    default:
      input = null;
  }

  return (
    <div>
      <label>{text}</label>
      {input}
    </div>
  );
};
