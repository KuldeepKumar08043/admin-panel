import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import './App.css';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

class App extends Component {
  render() {
    console.log("Host URL" + process.env.PUBLIC_URL);
    return (
      <div className="App">
        <Router>
          <Switch>
              <Route path="/" exact component={Home}>Home</Route>
              <Route path="/signin" component={Signin}>Signin</Route>
              <Route path="/signup" component={Signup}>Signup</Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
