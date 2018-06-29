import React, {Component} from 'react'
import Directions from "./Directions"
import Description from "./Description"
import CreateForm from "./CreateForm"
import UpdateForm from "./UpdateForm"
import "../Components/Multi.css"

class Multi extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.change = this
            .change
            .bind(this)
    }

    change(display) {
        switch (display) {
            case "a":
                return <Directions/>
            case "b":
                return <Description currentArt={this.props.currentArt}/>
            case "c":
                return <CreateForm handleCreateArtCard={this.props.handleCreateArtCard}/>
            case "d":
                return <UpdateForm
                    currentArt={this.props.currentArt}
                    handleUpdateArtCard={this.props.handleUpdateArtCard}/>
        }
    }

    render() {
        let displaySwitch = this.change(this.props.display)
        let artList = this.props.artList
        let artId = this.props.id

        return (
        <div className="multi-card">
            <button className="add-button button-style" >Add New Discovery</button>
            {displaySwitch}
        </div>)
    }
}

export default Multi
