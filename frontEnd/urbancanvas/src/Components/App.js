import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './Header'
import Lib from './Lib';
import Welcome from './Welcome';

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
    <div className="App">
      <Header />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Art">Art</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/Art" component={Art} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)
export default App


