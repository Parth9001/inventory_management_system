import React, {useState, useEffect} from 'react'
import AuditPageBar from './AuditPageBar'
import AuditCard from './AuditCard'
import Search from './search'

export default function Audit() {

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        // Fetch data from API
        fetchData();
      }, []);
  
    const fetchData = async () => {
      try {
        // Make API call to fetch data
        const response = await fetch('http://127.0.0.1:8000');
        const data = await response.json();
        setRowData(data); // Update rowData state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  return (
    <div style={{ width: "100%", position: "relative"}}>
        <div
            style={{
                width: 500,
                height: 80,
                left: 320,
                top: 70,
                position: "absolute",
                textAlign: "center",
                color: "#083866",
                fontSize: 96,
                fontFamily: "Garamond",
                fontWeight: "400",
                wordWrap: "break-word",
                zIndex: 1
            }}
        >
            Audit
        </div>
        
        {/* Background */}
        <img
            style={{
                width: '100%',
                height: '103%',
                left: 0,
                top: 0,
                position: "absolute",
                boxShadow: "20px 20px 50px 30px #001521 inset",
                borderTopLeftRadius: 200,
                zIndex: -1,
                backgroundColor: "white"
            }}
        />

        <div className="search" style={{paddingTop: '20%', paddingLeft: '8%', zIndex: 1}}>
            <Search/>
        </div>
        <div style={{marginLeft:'7%', marginTop: '3%',paddingBottom: '4%', zIndex:1}}>
            <AuditPageBar/>
        </div>

        {rowData.map((element) =>{
            return(
                <div key={element.id} style={{ marginLeft:'7%', marginTop: '3%', zIndex: 1, position:'relative'}}>
                    <AuditCard name={element.name} quantity={element.quantity}/>
                </div>)
        })}
    </div>
  )
}
