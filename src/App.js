import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import mainPage from './pages/mainPage'
import PlaylistOrNotFoundPage from './pages/playlistOrNotFoundPage'
import PlaylistPage from './pages/playlistPage'
import NotFoundPage from './pages/notFoundPage'
import './App.module.css';

class App extends Component {
  componentDidMount() {
    // console.log(PlaylistPage)
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route 
              exact path = "/"
              component={() => (
                <div>
                  <Link to="/playlist/0">Добрый вечер</Link>
                  <br />
                  <button 
                    onClick={() => {
                      localStorage.clear();
                    }}>
                    Очистить localStorage
                  </button>
                </div>
              )}
            />
            {/* <Route exact path="/" component={mainPage} /> */}
            <Route 
              path="/playlist/:playlistId"
              component={PlaylistOrNotFoundPage} 
            />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
