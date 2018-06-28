import React, { Component } from 'react'
import List from "./List"
import Map from "./Map"
import Multi from "./Multi"

class Lib extends Component {
    render() {
        return (
            <div className="card-lib">
                <List handleClick={this.props.handleClick} artList={this.props.artList} handleArtDelete={this.props.handleArtDelete} />
                <Map currentArt={this.props.currentArt} />
                <Multi
                    handleCreateArtCard={this.props.handleCreateArtCard}
                    display={this.props.display}
                    currentArt={this.props.currentArt} />
            </div>
        )
    }
}

export default Lib
