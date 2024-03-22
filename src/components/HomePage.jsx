import { useState } from "react";
import { quizQuestions } from "./Question";
import Quiz from "./Quiz";
const HomePage = () => {
  const [startQuz, setStartQuz] = useState(false);
  return (
    <div className="h-full">
      {!startQuz && (
        <div className="flex flex-col items-center h-full justify-center">
          <div className="bot">
            <div>
              <h1>Quiz App</h1>
              <span onClick={() => setStartQuz((prev) => !prev)}>Start</span>
            </div>
          </div>
        </div>
      )}
      {startQuz && <Quiz quizQuestions={quizQuestions} />}
    </div>
  );
};

export default HomePage;
