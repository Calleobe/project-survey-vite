import "../styles/RangerSlider.css";

export const RangeSliderQuestion = ({ question, answer, onAnswerChange }) => {
  return (
    <div className="RangeSliderContainer">
      <label>{question.text}</label>
      <input
        type="range"
        min={0}
        max={10}
        step={1}
        value={answer || 0}
        onChange={(e) => onAnswerChange(e.target.value)}
      />
      <p>Selected Value: {answer}</p>
    </div>
  );
};
