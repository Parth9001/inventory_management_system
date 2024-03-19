import './App.css';
import Card from './Components/Card';
import Issued from './Components/issued';
import Login from './Components/Login';
import Home from './Components/home';
import Pagebg from './Components/pagebg'
import MyComponent from './addPageComp/addPage';
import EditPage from './editPageComp/editPage';
import AuditCard from './Components/AuditCard';
import AuditPageBar from './Components/AuditPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Audit from './Components/AuditPage'

function App() {
  return (
    <>
      <div >
        <Router>
          <Switch>
            <Route exact path="/" > 
              <Pagebg/>
              <div style={{marginLeft:'20%', paddingTop: '5%'}}>
                <Home/>
              </div>
            </Route>
            <Route exact path="/add" > 
              <Pagebg/>
              <div style={{marginLeft:'20%', paddingTop: '5%'}}>
                <MyComponent/>
              </div>
            </Route>
            <Route exact path="/issued" > 
              <Pagebg/>
              <div style={{marginLeft:'20%', paddingTop: '5%'}}>
                <Issued/>
              </div>
            </Route>
            <Route exact path="/audit" > 
              <Pagebg/>
              <div style={{marginLeft:'20%', paddingTop: '5%'}}>
                <Audit/>
              </div>
            </Route>
           
          </Switch>
        </Router>
      </div>
      {/* <Login/> */}
      {/* <Card/> */}
        {/* React router dom --- */}
          {/* <Home/> */}
          {/* <MyComponent/> */}
          {/* <EditPage/> */}
          {/* <Issued/> */}
          {/* <AuditCard /> */}
        {/* <AuditPageBar /> */}
        {/* <Issued /> */}
      
    </>
  );
}

export default App;
