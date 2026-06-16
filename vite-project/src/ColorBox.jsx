import React, { useState } from 'react';

const ColorBox = () => {
  const [bgColor, setBgColor] = useState('lightgray');

  return (
    <div className="task-card" style={{ backgroundColor: bgColor }}>
      <h3>4. Color Changer</h3>
      <button onClick={() => setBgColor('lightpink')}>Pink</button>
      <button onClick={() => setBgColor('lightblue')}>Blue</button>
      <button onClick={() => setBgColor('lightgreen')}>Green</button>
    </div>
  );
};

export default ColorBox;