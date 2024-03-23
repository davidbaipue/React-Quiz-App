import { useEffect, useState } from "react";
import { Timer } from "./Timer";
import Description from "./Description";
import Quiz from "./Quiz";
import ProgressBar from "./ProgressBar";
import { quizQuestions } from "./Question";
const HomePage = () => {
  const [startQuz, setStartQuz] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [questionindex, setQuestions] = useState(0);
  const [action, setAction] = useState(false);
  function next() {
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
  const hours = 0.01;
  function BeginQuiz() {
    setStartQuz(true);
    setAction(true);
  }
  function handleResult() {
    alert("End");
    setStartQuz(false);
  }

  const { remainingHours, remainingMinutes, remainingSeconds, seconds } = Timer(
    { hours, action }
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      handleResult();
    }, hours * 3600 * 1000);
    return () => clearTimeout(timer);
  }, [hours, action]);
  return (
    <div className="h-full homeApp">
      {!startQuz && (
        <div className="flex flex-col items-center h-full justify-center">
          <div className="bot">
            <div>
              <h1>Quiz App</h1>
              <span onClick={() => BeginQuiz()}>Start</span>
            </div>
          </div>
        </div>
      )}
      {startQuz && (
        <>
          <ProgressBar
            time={[
              remainingHours,
              remainingMinutes,
              remainingSeconds,
              hours,
              seconds,
            ]}
          />
          <Description
            courseDetail={[
              "Computer Science",
              { remainingHours, remainingMinutes, remainingSeconds },
              "Quiz Description",
              seconds === 0,
            ]}
          />
          <Quiz
            arr={[
              quizQuestions[questionindex],
              quizQuestions.length,
              questionindex,
              next,
              prev,
              selectedOptions,
              handleOptionSelect,
              false,
            ]}
          />
        </>
      )}
    </div>
  );
};
export default HomePage;
