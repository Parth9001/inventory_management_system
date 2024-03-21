import './App.css';
import Issued from './Components/issued';
import Login from './Components/Login';
import Home from './Components/home';
import Pagebg from './Components/pagebg'
import MyComponent from './addPageComp/addPage';
import EditPage from './editPageComp/editPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Audit from './Components/audit'
import DescriptionPage from './Components/descriptionPage';

function App() {
  return (
    <>
     <Router>
        <Pagebg/>
          <div style={{marginLeft:'20%', paddingTop: '5%'}}>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/add" element={<MyComponent/>}></Route>
              <Route path="/issued" element={<Issued/>}></Route>
              <Route path="/audit" element={<Audit/>}></Route>
              <Route path="/product" element={<DescriptionPage/>}></Route>
              <Route path="/edit" element={<EditPage/>}></Route>
            </Routes>
          </div>
        </Router> 
      {/* <Login/> */}
      {/* <Card/> */}
      {/* <Pagebg/> */}
      {/* <div style={{marginLeft:'20%', paddingTop: '5%'}}> */}
        {/* React router dom --- */}
          {/* <Home/> */}
          {/* <MyComponent/> */}
          {/* <EditPage/> */}
          {/* <Issued/> */}
          {/* <Audit/> */}
      {/* </div> */}
    </>
  );
}

export default App;
