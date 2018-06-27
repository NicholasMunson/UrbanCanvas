import React, {Component} from 'react'
import Directions from "./Directions"
import Description from "./Description"
import Form from "./Form"

class Multi extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
				let displaySwitch = change(this.props.display)
				let artList = (this.props.artList)
				let artId = (this.props.id)
        function change(display) {
            switch (display) {
                case "a":
                    return <Directions  />
                case "b":
                    return <Description description={this.props.artList} />
                case "c":
                    return <Form />
            }
        }
        return (<div className="Multi-card"></div>)
    }
}

export default Multi