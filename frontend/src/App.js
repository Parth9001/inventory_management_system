import React, { useState } from 'react';
import './App.css';
import Issued from './Components/issued';
import Login from './Components/Login';
import Home from './Components/home';
import Pagebg from './Components/pagebg';
import MyComponent from './addPageComp/addPage';
import EditPage from './editPageComp/editPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Audit from './Components/audit';
import DescriptionPage from './Components/descriptionPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Router>
         <Routes>
         <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route exact path="/" element={
                <>
                  <Pagebg />
                  <div style={{ marginLeft: '20%', paddingTop: '5%' }}>
                    <Home />
                  </div>
                </>
              }
            ></Route>
            <Route path="/add" element={<><Pagebg />
                  <div style={{ marginLeft: '20%', paddingTop: '5%' }}>
                    <MyComponent />
                  </div></>}></Route>
            <Route path="/issued" element={
            <><Pagebg />
            <div style={{ marginLeft: '20%', paddingTop: '5%' }}>
              <Issued />
            </div></>}></Route>
            <Route path="/audit" element={<><Pagebg />
            <div style={{ marginLeft: '20%', paddingTop: '5%' }}>
              <Audit />
            </div></>}></Route>
            <Route path="/product" element={<><Pagebg />
            <div style={{ marginLeft: '20%', paddingTop: '5%' }}>
              <DescriptionPage />
            </div></>}></Route>
            <Route path="/edit" element={<><Pagebg />
            <div style={{ marginLeft: '20%', paddingTop: '5%' }}>
              <EditPage />
            </div></>}></Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
