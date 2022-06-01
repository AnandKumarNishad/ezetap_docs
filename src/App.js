import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import Payments from './components/Payments';
import APIDetails from './components/APIDetails';


function App() {
    return (
      <div className="App">
          <Router>
            <Routes>
              <Route exact path = '/' element = { <Home /> } />
              <Route exact path = '/getStarted' element = { <GetStarted /> } />
              <Route exact path = '/apiDetails' element = { <APIDetails /> } />
            </Routes>
          </Router>
      </div>
    );
}

export default App;