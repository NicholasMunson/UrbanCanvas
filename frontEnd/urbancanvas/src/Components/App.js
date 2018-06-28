import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './Header'
import Lib from './Lib';
import Welcome from './Welcome'
import "./App.css"

const URL = "https://urban-canvas-server.herokuapp.com/api/v1/art-cards"

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          display: "a",
          artList: [],
          id: null,
      }
  }

  componentWillMount = () => {
      fetch(URL)
          .then(res => res.json())
          .then(res => {
              this.setState({ artList: res })
          })
  }

  handleCreateArtCard(event) {
    event.preventDefault()

    const data = new FormData(event.target)

    console.log(data.get('imgUrl'))

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        imgUrl: data.get('imgUrl'),
        description: data.get('description'),
        location: data.get('location')
      })
    }).then(res => {
      console.log(JSON.stringify(res))
      return res
    })
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route className="header" path="/" component={Header} />
          <div className="app">
            <Route exact path="/" component={Welcome} />
            <Route path="/art" component={() => <Lib display={this.state.display} artList={this.state.artList} id={this.state.id} handleCreateArtCard={this.handleCreateArtCard}/>} />
          </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default App
