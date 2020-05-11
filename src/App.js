import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; // Using HashRouter due to lack of pushState support on GH pages

import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

/*
  Implement HashRouting to allow subdirectories on gh pages
  https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2
  https://reacttraining.com/react-router/
*/

class App extends Component {
  state = {

  }

  render() {
    return (
      <Router>
        <div className = "App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about/">
              <About />
            </Route>
            <Route exact path="/resume/">
              <Resume />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
