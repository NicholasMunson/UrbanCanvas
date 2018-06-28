import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './Header'
import Lib from './Lib';
import Welcome from './Welcome'
import "./App.css"

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          display: "a",
          artList: [],
          id: null
      }
  }
  componentWillMount = () => {
      let URL = "https://urban-canvas-server.herokuapp.com/api/v1/art-cards"
      fetch(URL)
          .then(res => res.json())
          .then(res => {
              this.setState({ artList: res })
          })
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route className="header" path="/" component={Header} />
          <div className="app">
            <Route exact path="/" component={Welcome} />
            <Route path="/art" component={() => <Lib display={this.state.display} artList={this.state.artList} id={this.state.id} />} />
          </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default App
