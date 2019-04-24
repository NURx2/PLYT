import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import mainPage from './pages/mainPage'
import playlistPage from './pages/playlistPage'
import './App.module.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route 
            exact path = "/"
            component={() => <Link to="/playlist/1">Добрый вечер</Link>}
          />
          {/* <Route exact path="/" component={mainPage} /> */}
          <Route path="/playlist/:playlistId" component={playlistPage} />
        </div>
      </Router>
    );
  }
}

export default App;
