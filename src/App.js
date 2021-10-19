import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './contexts/AuthProvider';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/RrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/signin'>
              <SignIn />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <PrivateRoute path='/service-details/:service'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
          </Switch>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
