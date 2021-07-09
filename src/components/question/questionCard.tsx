import React from "react";
import {AnswerObject} from '../../App';

type IProps = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<IProps> = ({
    question, answers, callback, userAnswer, questionNumber, totalQuestions
}) => (
    <div>
        <p className="number"><strong>Question: </strong> { questionNumber }/ {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{ __html: question}}></p>
        <div>
            {answers.map((answer) => (
                <div key={answer}>
                    <button disabled={userAnswer? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer}}></span>
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;