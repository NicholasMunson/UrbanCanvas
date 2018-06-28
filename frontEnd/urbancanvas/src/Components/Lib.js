import React, { Component } from 'react'
import List from "./List"
import Map from "./Map"
import Multi from "./Multi"

class Lib extends Component {
    render() {
        return (
            <div className="card-lib">
                <List artList={this.props.artList} handleArtDelete={this.props.handleArtDelete}/>
                <Map id={this.props.id} artList={this.props.artList} />
                <Multi
                    handleCreateArtCard={this.props.handleCreateArtCard}
                    display={this.props.display}
                    artList={this.props.artList}
                    id={this.props.id} />
            </div>
        )
    }
}

export default Lib
