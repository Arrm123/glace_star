import React, { useState } from 'react';
import './manyButtonsRow.scss';
import { motion } from "framer-motion";

function ManyButtonsRow({ onSelect, title, k }) {
  // const [selectedOption, setSelectedOption] = useState(false);
  const [isOn, setIsOn] = useState(false);

  // const handleOptionChange = (option) => {
  //   // setSelectedOption(option);
  //   onSelect({title:title,option:option});
  // };

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onSelect({title:title,option: !isOn});
  }

  return (
    <div className="many-buttons-row" key={k + Math.random()*100}>
          <span className='radio-title'>{title}</span>
          {/* <div className='radio-input'>
            <input
              type="radio"
              value={!selectedOption}
              checked={!selectedOption}
              onChange={() => handleOptionChange(false)}
              className="radio-button-input"
            />
            <input
            type="radio"
            value={selectedOption}
            checked={selectedOption}
            onChange={() => handleOptionChange(true)}
            className="radio-button-input"
            />
          </div> */}
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default ManyButtonsRow;
