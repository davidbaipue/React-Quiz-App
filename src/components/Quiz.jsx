import PropTypes from "prop-types";
import { useState } from "react";
const Quiz = ({ quizQuestions }) => {
  const [questionindex, setQuestions] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const questions = quizQuestions[questionindex];
  const [correctlyAnswered, setCorrectlyAnswered] = useState([]);
  const [missedQuestions, setMissedQuestions] = useState([]);
  async function next() {
    questionindex < quizQuestions.length - 1
      ? setQuestions((prev) => prev + 1)
      : handleResult();
  }
  function prev() {
    setQuestions((prev) => prev - 1);
  }
  function handleOptionSelect(optionKey) {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionindex]: optionKey,
    }));
  }
  function handleResult() {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedOptions[index] === question.correctAnswer) {
        score++;
      }
    });
    alert(`Your score is ${score}/${quizQuestions.length}`);
    const correctlyAnsweredIndices = [];
    const missedQuestionsIndices = [];
    quizQuestions.forEach((question, index) => {
      if (selectedOptions[index] === question.correctAnswer) {
        correctlyAnsweredIndices.push(index);
      } else {
        missedQuestionsIndices.push(index);
      }
    });
    setCorrectlyAnswered(correctlyAnsweredIndices);
    setMissedQuestions(missedQuestionsIndices);
    console.log(correctlyAnswered);
    console.log(`Wrong ${missedQuestions}`);
  }

  return (
    <div className="quizBot">
      <div className="title">
        <h1>Computer Science Test</h1>
        <p>Duration 1hrs</p>
        <p>
          The time limit is 0 hr, 52 min. This assessment will be submitted when
          time is up. Students can submit this 1 time(s). (The highest score
          will be recorded).
        </p>
      </div>
      <div className="quiz">
        <ul>
          <strong>{`Question ${questionindex + 1} of ${
            quizQuestions.length
          }`}</strong>
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
        <button
          className="btn prev"
          onClick={prev}
          disabled={questionindex === 0}
        >
          Prev
        </button>
        <button
          className="btn next"
          onClick={next}
          disabled={!selectedOptions[questionindex]}
        >
          {`${questionindex === quizQuestions.length - 1 ? "Submit" : "Next"}`}
        </button>
      </div>
    </div>
  );
};

Quiz.propTypes = {
  quizQuestions: PropTypes.array.isRequired,
};

export default Quiz;
