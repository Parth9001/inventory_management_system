import React, { useState } from 'react';

function QuantityCounter({quantity, setQuantity}) {
  
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div style={{width: 250, height: 86, left: 680, top: 432, position: 'absolute'}}>
      <div style={{width: 250, height: 50, left: 0, top: 36, position: 'absolute', background: 'white', borderRadius: 30, border: '3px #042453 solid'}} />
      <div style={{left: 88, top: 43, position: 'absolute', color: '#4C7ED5', fontSize: 24, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word'}}>
        <button style={{background: 'none', border: 'none', fontSize: '32'}} onClick={handleDecrement}>  -  </button>
        {quantity}
        <button style={{background: 'none', border: 'none', fontSize: '32'}} onClick={handleIncrement}>  +  </button>
      </div>
      <div style={{width: 194, height: 34, left: 28, top: 0, position: 'absolute', textAlign: 'center', color: '#042453', fontSize: 30, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word'}}>Stock Available</div>
    </div>
  );
}

export default QuantityCounter;