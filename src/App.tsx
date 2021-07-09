import React from 'react';
import './App.css';
import QuestionCard from './components/question/questionCard';
import { useState, useEffect } from 'react';
import { fetchQuizQuestions, Question } from './api';
import { Difficulty, QuestionState } from './api';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ?(
        <button className="start" onClick={startTrivia}>Start</button>
      ) : null}
      <p className="score">Score: </p>
      <p className="loading">Loading Questions...</p>
      
      {/* <QuestionCard 
      questionNumber={number +1} 
      totalQuestions={TOTAL_QUESTIONS} 
      question={questions[number].question} 
      answers={questions[number].answers} 
      userAnswer={userAnswers ? userAnswers[number]: undefined}
      callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next</button>
      {/* https://opentdb.com/api.php?amount=10 */}
    </div>
  );
}

export default App;
