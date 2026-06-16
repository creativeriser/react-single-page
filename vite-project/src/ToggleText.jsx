import React, { useState } from 'react';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="task-card">
      <h3>2. Toggle Text</h3>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p>Now you see me!</p>}
    </div>
  );
};

export default ToggleText;