import { useState } from "react";
import Question from "./_components/question";
import questions from "../../data/questions.json";
import Result from "./_components/result";

export type AnswerOptionType = {
  text: string;
  isCorrect: boolean;
};

export type QuestionType = {
  question: string;
  answerOptions: AnswerOptionType[];
};

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);

  const handleNextQuestion = (isCorrect: boolean) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers((prevAnswers) => [...prevAnswers, isCorrect]);
  };

  // console.log(userAnswers);

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  const correctAnswers = userAnswers.filter((answer) => answer).length;

  return (
    <main className="flex h-screen items-center justify-center bg-gray-900 p-4 text-white">
      <div className="flex flex-col space-y-6">
        <h1 className="text-center text-5xl font-semibold md:text-6xl lg:text-7xl">
          Kewiz
        </h1>
        {currentQuestion < questions.length && (
          <div>
            <Question
              question={questions[currentQuestion]}
              onAnswerClick={handleNextQuestion}
            />
          </div>
        )}

        {questions.length === currentQuestion && (
          <Result
            questions={questions}
            userAnswers={userAnswers}
            resetQuiz={handleResetQuiz}
            correctAnswers={correctAnswers}
          />
        )}
      </div>
    </main>
  );
}
