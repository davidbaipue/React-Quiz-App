import PropTypes from "prop-types";
const Quiz = ({ arr }) => {
  const [
    questions,
    questionLen,
    questionindex,
    next,
    prev,
    selectedOptions,
    handleOptionSelect,
    goBackward,
  ] = arr;
  return (
    <div className="quizBot">
      <div className="quiz">
        <ul>
          <strong>{`Question ${questionindex + 1} of ${questionLen}`}</strong>
          <li>{questions.question}</li>
          {Object.keys(questions.options).map((optionKey) => (
            <li key={optionKey}>
              <input
                type="radio"
                name="quiz"
                id={optionKey}
                onChange={() => handleOptionSelect(optionKey)}
                checked={selectedOptions[questionindex] === optionKey}
              />
              <label htmlFor={optionKey}>{questions.options[optionKey]}</label>
            </li>
          ))}
        </ul>
        {goBackward && (
          <button
            className="btn prev"
            onClick={() => prev()}
            disabled={questionindex === 0}
          >
            Prev
          </button>
        )}
        <button
          className="btn next"
          onClick={() => next()}
          disabled={!selectedOptions[questionindex]}
        >
          {`${questionindex === questionLen - 1 ? "Submit" : "Next"}`}
        </button>
      </div>
    </div>
  );
};
Quiz.propTypes = {
  arr: PropTypes.array.isRequired,
};
export default Quiz;
