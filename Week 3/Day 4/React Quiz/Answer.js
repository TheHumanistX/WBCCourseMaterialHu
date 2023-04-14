// Answer.js
import React from 'react';

const Answer = ({ answer, isSelected, onSelect }) => {
  return (
    <div className="answer">
      <label>
        <input
          type="radio"
          name="answer"
          value={answer}
          checked={isSelected}
          onChange={onSelect}
        />
        {answer}
      </label>
    </div>
  );
};

export default Answer;
