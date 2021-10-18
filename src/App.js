import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
