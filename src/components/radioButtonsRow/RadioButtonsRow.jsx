import React, { useState } from 'react';
import './radioButtonsRow.scss';

function RadioButtonsRow({ type, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(type[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="radio-buttons-row">
      {type.map((option,i) => (
        <label key={option} className="radio-button-label">
          <span className="radio-button-text">{option}</span>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
            className="radio-button-input"
          />
        </label>
      ))}
    </div>
  );
}

export default RadioButtonsRow;
