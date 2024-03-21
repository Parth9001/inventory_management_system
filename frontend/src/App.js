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
    // Perform login logic here
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Pagebg />
                  <div style={{ marginLeft: '20%', paddingTop: '5%' }}>
                    <Home />
                  </div>
                </>
              }
            ></Route>
            <Route path="/add" element={<MyComponent />}></Route>
            <Route path="/issued" element={<Issued />}></Route>
            <Route path="/audit" element={<Audit />}></Route>
            <Route path="/product" element={<DescriptionPage />}></Route>
            <Route path="/edit" element={<EditPage />}></Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
