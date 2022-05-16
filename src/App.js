import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import Payments from './components/Payments';


function App() {
    return (
      <div className="App">
          <Router>
            <Routes>
              <Route exact path = '/' element = { <Home /> } />
              <Route exact path = '/getStarted' element = { <GetStarted /> } />
              <Route exact path = '/payments' element = { <Payments /> } />
            </Routes>
          </Router>
      </div>
    );
}

export default App;