import './App.css';
import Issued from './Components/issued';
import Login from './Components/Login';
import Home from './Components/home';
import Pagebg from './Components/pagebg'
import MyComponent from './addPageComp/addPage';
import EditPage from './editPageComp/editPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Audit from './Components/audit'
import DescriptionPage from './Components/descriptionPage';

function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <Card/> */}
      <Pagebg/>
      <div style={{marginLeft:'20%', paddingTop: '5%'}}>
        {/* React router dom --- */}
          <Home/>
          {/* <DescriptionPage/> */}
          {/* <MyComponent/> */}
          {/* <EditPage/> */}
          {/* <Issued/> */}
          {/* <Audit/> */}
      </div>
    </>
  );
}

export default App;
