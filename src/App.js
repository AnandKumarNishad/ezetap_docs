import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import APIDetails from './components/APIDetails';
import Features from './components/Features';
import TopNavBar from './components/TopNavBar';
import SideNavBar from './components/SideNavBar';
import UserAgreementAPI from './components/UserAgreementAPI';
import UserConsentAPI from './components/UserConsentAPI';
import ErrorsInAPI from './components/ErrorsInAPI';


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
                  <Route exact path = '/apiDetails/pushtopay/startApi' element = { <APIDetails /> } />
                  <Route exact path = '/apiDetails/pushtopay/statusApi' element = { <APIDetails /> } />
                  <Route exact path = '/apiDetails/pushtopay/cancelApi' element = { <APIDetails /> } />
                  <Route exact path = '/apiDetails/useragreement/createApi' element = { <UserAgreementAPI /> } />
                  <Route exact path = '/apiDetails/useragreement/updateApi' element = { <UserAgreementAPI /> } />
                  <Route exact path = '/apiDetails/useragreement/fetchApi' element = { <UserAgreementAPI /> } />
                  <Route exact path = '/apiDetails/userconsent/createApi' element = { <UserConsentAPI /> } />
                  <Route exact path = '/apiDetails/userconsent/updateApi' element = { <UserConsentAPI /> } />
                  <Route exact path = '/apiDetails/userconsent/fetchApi' element = { <UserConsentAPI /> } />
                  <Route exact path = '/apiDetails/errors' element = { <ErrorsInAPI /> } />
                </Routes>
              </div>
            </div>
          </Router>
      </div>
    );
}

export default App;