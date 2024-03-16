import React from 'react';

function EditButton() {
  return (
    <button style={{ position: 'relative', width: 250, height: 75, background: '#042453', border: '3px solid #042453', borderRadius: 30 }}>
      <a href="#" style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
        <div style={{ width: 100, height: 40, textAlign: 'center', color: 'white', fontSize: 36, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word' }}>EDIT</div>
      </a>
    </button>
  );
}

export default EditButton;
