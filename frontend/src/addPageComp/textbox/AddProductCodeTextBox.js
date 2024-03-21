import React, { useState } from 'react';

const TextInputBoxWithStylesProdId = ({valuecode, setValuecode}) => {
  const [focused, setFocused] = useState(false);

  // Define a variable for the placeholder text
  var placeholderText = 'Enter Location';

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!valuecode) {
      setFocused(false);
    }
  };

  const handleChange = (event) => {
    setValuecode(event.target.valuecode);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <input
        type="text"
        valuecode={valuecode}
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

export default TextInputBoxWithStylesProdId;
