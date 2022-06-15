import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import Payments from './components/Payments';
import APIDetails from './components/APIDetails';
import Features from './components/Features';
import StartApi from './components/StartApi';
import StatusApi from './components/StatusApi';
import CancelApi from './components/CancelApi';


function App() {
    return (
      <div className="App">
          <Router>
            <Routes>
              <Route exact path = '/' element = { <Home /> } />
              <Route exact path = '/getStarted' element = { <GetStarted /> } />
              <Route exact path = '/features' element = { <Features /> } />
              <Route exact path = '/features/startApi' element = { <StartApi /> } />
              <Route exact path = '/features/statusApi' element = { <StatusApi /> } />
              <Route exact path = '/features/cancelApi' element = { <CancelApi /> } />
              <Route exact path = '/apiDetails' element = { <APIDetails /> } />
            </Routes>
          </Router>
      </div>
    );
}

export default App;