import React, { useState } from 'react';

const LiveInput = () => {
  const [text, setText] = useState('');

  return (
    <div className="task-card">
      <h3>3. Live Input</h3>
      <input 
        type="text" 
        placeholder="Type something..." 
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default LiveInput;