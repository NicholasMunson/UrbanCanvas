import React, { Component } from 'react'
import List from "./List"
import Map from "./Map"
import Multi from "./Multi"

class Lib extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "a",
      artList: [],
      id: null
    }
  }
  componentWillMount = () => {
    let URL = "./dumb.json"
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        this.setState({ artList: res })
      })
  }
  render() {
    return (
      <div className="card-lib">
        <List artList={this.state.artList} />
        <Map id={this.state.id} artList={this.state.artList} />
        <Multi display={this.state.display} />
      </div>
    )
  }
}

export default Lib