import React from 'react';

function LinkButton({image , quantity, name,description, code, id}) {
  const handlesubmit = async (event) => {
    event.preventDefault();
    try{
      const response=await fetch('http://127.0.0.1:8000/products/user_add/',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image : image,
          quantity:quantity,
          name:name,
          description:description,
          code:code,
          id:id
        })
      });
      if(response.ok){
        console.log('successfully added');
      } else{
        console.log('failed to POST',response.statusText);
      }
    } catch(error){
      console.error('Error Fetching API',error);
    }
  }
  return (
    <button style={{ position: 'relative', width: 250, height: 75, background: '#042453', border: '3px solid #042453', borderRadius: 30 }} onClick={handlesubmit}>
      <a href="#" style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
        <div style={{ width: 80, height: 40, textAlign: 'center', color: 'white', fontSize: 36, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word' }}>ADD</div>
      </a>
    </button>
  );
}

export default LinkButton;
