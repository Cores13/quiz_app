import React, { useEffect } from "react";
// import './App.css';
import { useState } from "react";
//components
import QuestionCard from "./components/question/questionCard";
//api
import { fetchQuizQuestions } from "./api";
//types
import { Difficulty, QuestionState } from "./api";
//styles
import { GlobalStyle, Wrapper } from "./App.style";
//contact form
import { ContactForm } from "./components/contactForm/ContactForm";

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [submited, setSubmited] = useState(false);

  const TOTAL_QUESTIONS = 11;

  console.log(questions);

  const newQuestions = [
    {
      answers: ["Blood", "Suggar", "Sex", "Magic"],
      category: "Crypto",
      correct_answer: "Blood",
      difficulty: "easy",
      incorrect_answers: ["Suggar", "Sex", "Magic"],
      question: "Which one is correct?",
      type: "multiple",
    },
    {
      answers: ["Blood", "Suggar", "Sex", "Magic"],
      category: "Crypto",
      correct_answer: "Blood",
      difficulty: "easy",
      incorrect_answers: ["Suggar", "Sex", "Magic"],
      question: "Which one is correct?",
      type: "multiple",
    },
    {
      answers: ["Blood", "Suggar", "Sex", "Magic"],
      category: "Crypto",
      correct_answer: "Blood",
      difficulty: "easy",
      incorrect_answers: ["Suggar", "Sex", "Magic"],
      question: "Which one is correct?",
      type: "multiple",
    },
    {
      answers: ["Blood", "Suggar", "Sex", "Magic"],
      category: "Crypto",
      correct_answer: "Blood",
      difficulty: "easy",
      incorrect_answers: ["Suggar", "Sex", "Magic"],
      question: "Which one is correct?",
      type: "multiple",
    },
    {
      answers: ["Blood", "Suggar", "Sex", "Magic"],
      category: "Crypto",
      correct_answer: "Blood",
      difficulty: "easy",
      incorrect_answers: ["Suggar", "Sex", "Magic"],
      question: "Which one is correct?",
      type: "multiple",
    },
    {
      answers: ["Blood", "Suggar", "Sex", "Magic"],
      category: "Crypto",
      correct_answer: "Blood",
      difficulty: "easy",
      incorrect_answers: ["Suggar", "Sex", "Magic"],
      question: "Which one is correct?",
      type: "multiple",
    },
    {
      answers: ["Blood", "Suggar", "Sex", "Magic"],
      category: "Crypto",
      correct_answer: "Blood",
      difficulty: "easy",
      incorrect_answers: ["Suggar", "Sex", "Magic"],
      question: "Which one is correct?",
      type: "multiple",
    },
    {
      answers: ["Blood", "Suggar", "Sex", "Magic"],
      category: "Crypto",
      correct_answer: "Blood",
      difficulty: "easy",
      incorrect_answers: ["Suggar", "Sex", "Magic"],
      question: "Which one is correct?",
      type: "multiple",
    },
    {
      answers: ["Blood", "Suggar", "Sex", "Magic"],
      category: "Crypto",
      correct_answer: "Blood",
      difficulty: "easy",
      incorrect_answers: ["Suggar", "Sex", "Magic"],
      question: "Which one is correct?",
      type: "multiple",
    },
    {
      answers: ["Blood", "Suggar", "Sex", "Magic"],
      category: "Crypto",
      correct_answer: "Blood",
      difficulty: "easy",
      incorrect_answers: ["Suggar", "Sex", "Magic"],
      question: "Which one is correct?",
      type: "multiple",
    },
    {
      answers: ["Blood", "Suggar", "Sex", "Magic"],
      category: "Crypto",
      correct_answer: "Blood",
      difficulty: "easy",
      incorrect_answers: ["Suggar", "Sex", "Magic"],
      question: "Which one is correct?",
      type: "multiple",
    },
  ];

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    // const newQuestions = await fetchQuizQuestions(
    //   TOTAL_QUESTIONS,
    //   Difficulty.EASY
    // );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    console.log(newQuestions);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //User answer
      const answer = e.currentTarget.value;
      //check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      //save answer in the array for user answer
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //move on to the next question if not the last one
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const getSubmited = async () => {
    const submited = await localStorage.getItem("submited");
    if (submited) {
      setSubmited(true);
      alert("You already submited your score!");
    }
  };

  useEffect(() => {
    getSubmited();
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Wrapper>
          <h1 className='quizTitle'>CRYPTO QUIZ</h1>
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <button className='start' onClick={startTrivia}>
              START
            </button>
          ) : null}
          {!gameOver ? (
            <p className='score'>
              <strong>SCORE: {score}</strong>{" "}
            </p>
          ) : null}
          {loading && <p className='loading'>Loading Questions...</p>}
          {!loading && !gameOver && (
            <QuestionCard
              questionNumber={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}
          {!loading &&
          !gameOver &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ? (
            <button className='next' onClick={nextQuestion}>
              Next
            </button>
          ) : null}
          {userAnswers.length === TOTAL_QUESTIONS ? (
            <ContactForm score={score} />
          ) : null}
        </Wrapper>
      </div>
    </>
  );
};

export default App;
