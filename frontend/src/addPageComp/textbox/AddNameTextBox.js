import React, { useState } from 'react';

const TextInputBoxWithStylesName = ({name, setname}) => {
  const [focused, setFocused] = useState(false);
  // Define a variable for the placeholder text
  var placeholderText = 'Enter name of product';

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!name) {
      setFocused(false);
    }
  };

  const handleChange = (event) => {
    setname(event.target.name);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <input
        type="text"
        name={name}
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

export default TextInputBoxWithStylesName;
