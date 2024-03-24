import React, { useState } from 'react';

const Username = () => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  // Define a variable for the placeholder text
  var placeholderText = 'Enter username';

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <input
        type="text"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={!focused ? placeholderText : ''}
        style={{
          width: '400px', // Set width
          height: '50px', // Set height
          padding: '10px 20px', // Adjust padding
          fontSize: '20px', // Apply fontSize
          fontFamily: 'Garamond', // Apply fontFamily
          fontWeight: '400', // Apply fontWeight
          outline: 'none',
          border: '3px #042453 solid', // Apply border
          borderRadius: '30px', // Apply borderRadius
          boxSizing: 'border-box',
          background: 'white',
          color: '#4C7ED5', // Apply color
          position: 'absolute', // Note: This applies to the input's container positioning, not the text inside it.
        }}
      />
    </div>
  );
}

export default Username;
