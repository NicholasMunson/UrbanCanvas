import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './Header'
import Lib from './Lib';
import Welcome from './Welcome';
import "./App.css"

const Home = () => (
  <div>
    <Welcome />
  </div>
)

const Art = () => (
  <Lib />
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const App = () => (
  <Router>
  <React.Fragment>
      <Route className="header" path="/" component={Header} />
      <div className="app">
        <Route exact path="/" component={Welcome} />
        <Route path="/topics" component={Lib} />
      {/* <Route path="/Art" component={Art} /> */}
      {/* <Route path="/topics" component={Topics} /> */}
    </div>
    </React.Fragment>
  </Router>
)

export default App


