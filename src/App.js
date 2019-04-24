import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={mainPage} />
          <Route path="/playlist/:playlistId" component={playlistPage} />
        </div>
      </Router>
    );
  }
}

export default App;
