import { useState } from "react";
import { QuestionType } from "../quiz-app";
import Button from "./ui/button";

interface IResultPropsType {
  userAnswers: boolean[];
  questions: QuestionType[];
  resetQuiz: () => void;
  correctAnswers: number;
}

export default function Result({
  userAnswers,
  questions,
  resetQuiz,
  correctAnswers,
}: IResultPropsType) {
  const [showAnswers, setShowAnswers] = useState<boolean>(false);

  function toggleShowAnswers() {
    setShowAnswers(!showAnswers);
  }

  return (
    <div className="space-y-4">
      <div>
        {questions.map((i, idx) => (
          <div key={i.question} className="">
            <p
              className={`${userAnswers[idx] ? "text-green-600" : "text-red-500"} text-base font-medium md:text-lg`}
            >
              {idx + 1}. {i.question}
            </p>
            {showAnswers && (
              <div>
                {i.answerOptions.map((i) => (
                  <span key={i.text}>
                    {i.isCorrect && (
                      <div className="flex items-center gap-3 text-white">
                        <p>Correct Answer:</p>
                        <p>{i.text}</p>
                      </div>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-3">
        <Button onClick={toggleShowAnswers} className="bg-emerald-500">
          {showAnswers ? "Hide Answers" : "Show Answers"}
        </Button>
        <Button onClick={resetQuiz} className="bg-indigo-500">
          Reset Quiz
        </Button>
      </div>
      <p className="text-center font-medium">
        You have correctly answered {correctAnswers} out of {questions.length}{" "}
        questions.
      </p>
    </div>
  );
}
