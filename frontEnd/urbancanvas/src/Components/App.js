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
      currentArt: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleCreateArtCard = this.handleCreateArtCard.bind(this)
    this.handleArtDelete = this.handleArtDelete.bind(this)
  }

  componentDidMount = () => {
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          artList: res
        })
      })
  }

  handleClick(event, id) {
    let currentArt = this.state.artList.filter(art => art.id == id)[0]
    this.setState({
      currentArt: currentArt
    })
  }

  handleCreateArtCard(event) {
    event.preventDefault()

    const data = new FormData(event.target)

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        imgUrl: data.get('imgUrl'),
        description: data.get('description'),
        location: data.get('location')
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(res => {
        let currentArtList = this.state.artList
        currentArtList.unshift(res)
        this.setState({
          artList: currentArtList
        })
      })
  }

  handleArtDelete(event, id) {
    let deleteUrl = `${URL}/${id}`
    let currentArtList = this.state.artList
    let currentArt = this.state.artList.filter(art => art.id == id)[0]

    event.preventDefault()
    fetch(deleteUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        currentArtList.splice(currentArtList.indexOf(currentArt), 1)
        this.setState({
          artList: currentArtList,
          currentArt: {}
        })
      })
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route className="header" path="/" component={Header} />
          <div className="app">
            <Route exact path="/" component={Welcome} />
            <Route path="/art" component={() => <Lib display={this.state.display} artList={this.state.artList} currentArt={this.state.currentArt} handleCreateArtCard={this.handleCreateArtCard} handleArtDelete={this.handleArtDelete} handleClick={this.handleClick} />} />
          </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default App
