import React, { useState, useRef, useEffect } from 'react';

const TextInputBoxWithStylesDesc = ({description,setdescription}) => {
  const [focused, setFocused] = useState(false);
  const [fontSize, setFontSize] = useState(20); // Initial font size
  const maxLength = 300;

  const inputRef = useRef(null);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!description) {
      setFocused(false);
    }
  };

  const handleChange = (event) => {
    const inputdescription = event.target.description;
    if (inputdescription.length <= maxLength) {
      setdescription(inputdescription);
    }
  };

  // Adjust font size dynamically based on input length and box dimensions
  useEffect(() => {
    if (inputRef.current) {
      const inputWidth = inputRef.current.offsetWidth;
      const inputHeight = inputRef.current.offsetHeight;
      const textWidth = inputRef.current.scrollWidth;
      const textHeight = inputRef.current.scrollHeight;

      const widthRatio = inputWidth / textWidth;
      const heightRatio = inputHeight / textHeight;
      const ratio = Math.min(widthRatio, heightRatio);

      
    }
  }, [description]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <textarea
        ref={inputRef}
        description={description}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={!focused ? 'Enter Description' : ''}
        style={{
          width: '720px', // Set width
          height: '150px', // Set height
          padding: '10px 20px', // Adjust padding
          fontSize: `${fontSize}px`, // Apply dynamic fontSize
          fontFamily: 'Garamond', // Apply fontFamily
          fontWeight: '400', // Apply fontWeight
          outline: 'none',
          border: '3px #042453 solid', // Apply border
          borderRadius: '30px', // Apply borderRadius
          boxSizing: 'border-box',
          background: 'white',
          color: '#4C7ED5', // Apply color
          resize: 'none', // Prevent resizing
          overflowY: 'auto', // Enable vertical scrolling if content exceeds box height
        }}
      />
      {/* Display character count */}
      <div style={{ position: 'absolute', bottom: '10px', right: '10px', color: 'gray', fontSize: '14px' }}>
        {maxLength - description.length} characters left
      </div>
    </div>
  );
}

export default TextInputBoxWithStylesDesc;
