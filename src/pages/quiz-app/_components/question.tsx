import { QuestionType } from "../quiz-app";
import Button from "./ui/button";

interface IQuestionProps {
  question: QuestionType;
  onAnswerClick: (isCorrect: boolean) => void;
}

export default function Question({ onAnswerClick, question }: IQuestionProps) {
  return (
    <div className="space-y-4 rounded-md bg-gray-950 px-6 py-6">
      <h2 className="text-center text-lg md:text-xl">{question.question}</h2>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {question.answerOptions.map((item) => (
          <Button key={item.text} onClick={() => onAnswerClick(item.isCorrect)}>
            {item.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
