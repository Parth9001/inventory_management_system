import React, { useState, useEffect } from 'react';
import DownArrow from './assets/DownArrow.png'

export default function AuditCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make API call to fetch data
      const response = await fetch('YOUR_API_ENDPOINT');
      const data = await response.json();
      setRowData(data); // Update rowData state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleRow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div style={{ width: 970, height: isOpen ? 120 : 70, position: 'relative', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20 }}>
        <div style={{ width: '100%', height: '100%', border: '3px solid #042453', borderRadius: 20 }}>
          <div style={{ left: 30, top: 8, position: 'absolute', textAlign: 'center', color: '#042453', fontSize: 30, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word' }}>Product Name</div>
          <div style={{ left: 271, top: 15, position: 'absolute', textAlign: 'center', color: '#4C7ED5', fontSize: 24, fontFamily: 'Garamond', fontWeight: '400', wordWrap: 'break-word' }}>Product Type</div>
          <div style={{ width: 34, height: 34, left: 906, top: 8, position: 'absolute', cursor: 'pointer' }} onClick={toggleRow}>
            <div style={{ width: 25.27, height: 14.76, left: 4.37, top: 15.24, position: 'absolute', transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <img src={DownArrow} alt="Down Arrow" />
            </div>
          </div>
          {isOpen && (
            <div style={{ width: '99.5%', position: 'absolute', top: 70, background: 'white', borderRadius: '0 0 20px 20px' }}>
              <div style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}>
                <div style={{ width: '100%', height: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ color: '#042453', fontSize: 20, fontFamily: 'Garamond', fontWeight: '700', flex: '1' }}>User Name</div>
                  <div style={{ color: '#4C7ED5', fontSize: 20, fontFamily: 'Garamond', fontWeight: '400', flex: '1' }}>User ID</div>
                  <div style={{ color: '#4C7ED5', fontSize: 20, fontFamily: 'Garamond', fontWeight: '400', flex: '1' }}>DD/MM/YYYY<br />00:00</div>
                  <div style={{ color: '#4C7ED5', fontSize: 20, fontFamily: 'Garamond', fontWeight: '400', flex: '1' }}>00</div>
                </div>
                {/* Map through rowData to render multiple rows */}
                {rowData.map((row, index) => (
                  <div key={index} style={{ width: '100%', height: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ color: '#042453', fontSize: 20, fontFamily: 'Garamond', fontWeight: '700', flex: '1' }}>{row.userName}</div>
                    <div style={{ color: '#4C7ED5', fontSize: 20, fontFamily: 'Garamond', fontWeight: '400', flex: '1' }}>{row.userID}</div>
                    <div style={{ color: '#4C7ED5', fontSize: 20, fontFamily: 'Garamond', fontWeight: '400', flex: '1' }}>{row.dateTime}</div>
                    <div style={{ color: '#4C7ED5', fontSize: 20, fontFamily: 'Garamond', fontWeight: '400', flex: '1' }}>{row.data}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
