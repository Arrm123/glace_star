import React, { useState } from 'react';
import './manyButtonsRow.scss';

function ManyButtonsRow({ onSelect, title, k }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="many-buttons-row" key={k + Math.random()*100}>
          <span className='radio-title'>{title}</span>
          <div className='radio-input'>
            <input
              type="radio"
              value={false}
              checked={!selectedOption}
              onChange={() => handleOptionChange(false)}
              className="radio-button-input"
            />
            <input
            type="radio"
            value={true}
            checked={selectedOption}
            onChange={() => handleOptionChange(true)}
            className="radio-button-input"
            />
          </div>
    </div>
  );
}

export default ManyButtonsRow;
