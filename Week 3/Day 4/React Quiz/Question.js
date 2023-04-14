// Question.js
import React from 'react';
import Answer from './Answer';

const Question = ({ questionData, onAnswer, userAnswer }) => {
  const { question, answers } = questionData;

  return (
    <div className="question">
      <h2>{question}</h2>
      <div className="answers">
        {answers.map((answer, index) => (
          <Answer
            key={index}
            answer={answer}
            isSelected={userAnswer === index}
            onSelect={() => onAnswer(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
