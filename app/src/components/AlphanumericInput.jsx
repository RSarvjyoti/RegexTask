import React, { useState } from "react";

const AlphanumericInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [isAlphanumeric, setIsAlphanumeric] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const hasAlphanumeric = /^[a-zA-Z0-9]+$/.test(value);
    setIsAlphanumeric(hasAlphanumeric);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      style={{
        backgroundColor: isAlphanumeric ? "lightgreen" : "white",
      }}
      placeholder="Type here..."
    />
  );
};

export default AlphanumericInput;
