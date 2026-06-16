import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); // Clear input after adding
    }
  };

  return (
    <div className="task-card">
      <h3>5. Simple List</h3>
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;