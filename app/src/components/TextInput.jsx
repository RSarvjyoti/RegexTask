import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    let inputText = event.target.value;

    const updatedText = inputText
      .replace(/[aeiouAEIOU]/g, '#')     
      .replace(/\s\s+/g, '#')           
      .replace(/[0-9]/g, '#');         
      
    setText(updatedText);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input
        type="text"
        placeholder="Type here..."
        onChange={handleChange}
        style={{ width: '300px', padding: '10px', fontSize: '16px' }}
      />
      <p style={{ marginTop: '20px', fontSize: '20px' }}>
        {text}
      </p>
    </div>
  );
};

export default TextInput;
