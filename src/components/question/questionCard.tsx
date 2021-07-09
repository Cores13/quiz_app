import React from "react";

type IProps = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
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
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer}}></span>
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;