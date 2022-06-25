import React, { useState } from 'react';

const Toggle = () => {
  const [isChecked, setChecked] = useState(false);

  const checkEvent = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="toggle-item">
      <label className="toggle">
        <input 
          type="checkbox"
          checked={isChecked}
          onChange={checkEvent}
        />
        <span className="switch"></span>
      </label>
      <p>Toggle Switch {isChecked ? "ON" : "OFF"}</p>
    </div>
  );
}

export default Toggle;