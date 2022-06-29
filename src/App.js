import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import APIDetails from './components/APIDetails';
import Features from './components/Features';
import TopNavBar from './components/TopNavBar';
import SideNavBar from './components/SideNavBar';


function App() {
    return (
      <div className="App">
          <Router>
            <TopNavBar />
            <div>
              <div>
                <div>
                  <SideNavBar />
                </div>
                <Routes>
                  <Route exact path = '/' element = { <Home /> } />
                  <Route exact path = '/getStarted' element = { <GetStarted /> } />
                  <Route exact path = '/features' element = { <Features /> } />
                  <Route exact path = '/features/startApi' element = { <Features /> } />
                  <Route exact path = '/features/statusApi' element = { <Features /> } />
                  <Route exact path = '/features/cancelApi' element = { <Features /> } />
                  <Route exact path = '/apiDetails' element = { <APIDetails /> } />
                </Routes>
              </div>
            </div>
          </Router>
      </div>
    );
}

export default App;