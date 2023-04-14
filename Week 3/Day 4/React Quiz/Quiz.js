import React, { useState } from 'react';
import questionsData from './questionsData';
import Question from './Question';
import Results from './Results';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questionsData.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex, answerIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = answerIndex;
    setUserAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const submitQuiz = () => {
    setShowResults(true);
  };

  if (showResults) {
    return <Results userAnswers={userAnswers} questionsData={questionsData} />;
  }

  return (
    <div className="quiz">
      <Question
        questionData={questionsData[currentQuestion]}
        onAnswer={answerIndex => handleAnswer(currentQuestion, answerIndex)}
        userAnswer={userAnswers[currentQuestion]}
      />
      {currentQuestion < questionsData.length - 1 ? (
        <button onClick={nextQuestion}>Next</button>
      ) : (
        <button onClick={submitQuiz}>Submit</button>
      )}
    </div>
  );
};

export default Quiz;
