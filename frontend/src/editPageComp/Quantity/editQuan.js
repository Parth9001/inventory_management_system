import React, { useState } from 'react';

function EditQuan() {
  const [quantity, setQuantity] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const toggleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    } else if (event.target.value === '') {
      // Allows clearing the input field without converting it to 0 immediately,
      // giving the user a chance to type a new number.
      setQuantity('');
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    if (quantity === '') {
      setQuantity(0); // Resets to 0 if input is left empty
    }
  };

  return (
    <div style={{ width: 250, height: 86, position: 'absolute', left: 680, top: 432 }}>
      <div style={{ width: 250, height: 50, position: 'absolute', left: 0, top: 84, background: 'white', borderRadius: 30, border: '3px #042453 solid' }} />
      <div style={{ left: 88, top: 91, position: 'absolute', color: '#4C7ED5', fontSize: 24, fontFamily: 'Garamond', fontWeight: '700' }}>
        <button style={{ background: 'none', border: 'none', fontSize: '32' }} onClick={handleDecrement}> - </button>
        {isEditing ? (
          <input
            autoFocus
            type="text"
            value={quantity}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            style={{ width: '50px', fontSize: '24px', textAlign: 'center', border: 'none', outline: 'none' }}
          />
        ) : (
          <span onClick={toggleEdit}>{quantity}</span>
        )}
        <button style={{ background: 'none', border: 'none', fontSize: '32' }} onClick={handleIncrement}> + </button>
      </div>
      <div style={{ width: 194, height: 34, left: 28, top: 0, position: 'absolute', textAlign: 'center', color: '#042453', fontSize: 30, fontFamily: 'Garamond', fontWeight: '700', marginBottom:'20px'}}>Stock<br />Available</div>
    </div>
  );
}

export default EditQuan;
