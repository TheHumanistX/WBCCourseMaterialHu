// Results.js
import React from 'react';

const Results = ({ userAnswers, questionsData }) => {
  const score = userAnswers.reduce((total, answer, index) => {
    return answer === questionsData[index].correctAnswer ? total + 1 : total;
  }, 0);

  return (
    <div className="results">
      <h2>Your score: {score} / {questionsData.length}</h2>
    </div>
  );
};

export default Results;
