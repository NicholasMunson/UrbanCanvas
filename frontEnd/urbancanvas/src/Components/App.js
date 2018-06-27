import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './Header'
import Lib from './Lib';
import Welcome from './Welcome';
import "./App.css"

const App = () => (
  <Router>
  <React.Fragment>
      <Route className="header" path="/" component={Header} />
      <div className="app">
        <Route exact path="/" component={Welcome} />
        <Route path="/art" component={Lib} />
      </div>
    </React.Fragment>
  </Router>
)

export default App


