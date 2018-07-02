import React, {Component} from 'react'
import List from "./List"
import Map from "./Map"
import Multi from "./Multi"
import "../Components/Multi.css"

class Lib extends Component {
    render() {
        return (
            <div className="page-2-container">
                <section className="card-lib">
                    <List
                        handleClick={this.props.handleClick}
                        updateDisplay={this.props.updateDisplay}
                        artList={this.props.artList}
                        handleArtDelete={this.props.handleArtDelete}/>
                </section>
                <section className="map-container-lib">
                    <Map currentArt={this.props.currentArt}/>
                    <Multi
						updateDisplay={this.props.updateDisplay}
                        className="multi-changing-component"
                        handleCreateArtCard={this.props.handleCreateArtCard}
                        handleUpdateArtCard={this.props.handleUpdateArtCard}
                        display={this.props.display}
                        currentArt={this.props.currentArt}/>
                </section>
            </div>
        )
    }
}

export default Lib
