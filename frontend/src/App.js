import './App.css';
import Card from './Components/Card';
import Issued from './Components/issued';
import Login from './Components/Login';
import Home from './Components/home';
import Pagebg from './Components/pagebg'
import MyComponent from './addPageComp/addPage';
import EditPage from './editPageComp/editPage';
import AuditCard from './Components/AuditCard';
import AuditPageBar from './Components/AuditPageBar';
import Audit from './Components/audit';

function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <Card/> */}
      <Pagebg/>
      <div style={{marginLeft:'20%', paddingTop: '5%'}}>
        {/* React router dom --- */}
          {/* <Home/> */}
          {/* <MyComponent/> */}
          {/* <EditPage/> */}
          {/* <Issued/> */}
          <Audit/>
      </div>
    </>
  );
}

export default App;
