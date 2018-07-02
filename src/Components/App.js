import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './Header'
import Lib from './Lib';
import Welcome from './Welcome'
import "./App.css"
import Footer from './Footer'

const URL = "https://urban-canvas-server.herokuapp.com/api/v1/art-cards"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "a",
      artList: [],
      currentArt: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleCreateArtCard = this.handleCreateArtCard.bind(this)
    this.handleUpdateArtCard = this.handleUpdateArtCard.bind(this)
    this.handleArtDelete = this.handleArtDelete.bind(this)
    this.updateDisplay = this.updateDisplay.bind(this)
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

  handleErrors(response) {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response
  }

  updateDisplay(display) {
    this.setState({
      display: display
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
        location: data.get('location'),
        lat: parseFloat(data.get('lat')),
        lng: parseFloat(data.get('lng'))
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(this.handleErrors)
    .then(res => res.json())
    .then(res => {
      let currentArtList = this.state.artList
      currentArtList.unshift(res)
      this.setState({
        artList: currentArtList
      })
    })
    .catch(err => {
      console.error(err)
    })
  }

  handleArtDelete(event, id) {
    event.preventDefault()

    let deleteUrl = `${URL}/${id}`
    let currentArtList = this.state.artList
    let currentArt = this.state.artList.filter(art => art.id == id)[0]

    fetch(deleteUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
    .then(this.handleErrors)
    .then(res => res.json())
    .then(res => {
      currentArtList.splice(currentArtList.indexOf(currentArt), 1)
      this.setState({
        artList: currentArtList,
        currentArt: {}
      })
    })
    .catch(err => {
      console.error(err)
    })
  }

  handleUpdateArtCard(event, updateForm, id) {
    event.preventDefault()

    let updateUrl = `${URL}/${id}`
    const data = new FormData(event.target)

    fetch(updateUrl, {
      method: 'PUT',
      body: JSON.stringify({
        imgUrl: data.get('imgUrl'),
        description: data.get('description'),
        location: data.get('location'),
        lat: parseFloat(data.get('lat')),
        lng: parseFloat(data.get('lng'))
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then(this.handleErrors)
    .then(res => res.json())
    .then(res => {
      let currentArtList = this.state.artList
      let artToBeUpdated = currentArtList.filter(art => art.id == res.id)[0]
      currentArtList.splice(currentArtList.indexOf(artToBeUpdated), 1)
      currentArtList.unshift(res)
      this.setState({
        currentArt: res,
        artList: currentArtList
      })
    })
    .catch(err => {
      console.error(err)
    })
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route className="header" path="/" component={Header} />
          <div className="app">
            <Route exact path="/" component={Welcome} />
            <Route path="/art" component={() => <Lib display={this.state.display} artList={this.state.artList} currentArt={this.state.currentArt} handleCreateArtCard={this.handleCreateArtCard} handleArtDelete={this.handleArtDelete} handleClick={this.handleClick} handleUpdateArtCard={this.handleUpdateArtCard} updateDisplay={this.updateDisplay} addNewArt={this.addNewArt} />} />
          </div>
        <Footer />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
