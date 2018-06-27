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
        function change(display) {
            switch (display) {
                case "a":
                    return <Directions/>
                case "b":
                    return <Description/>
                case "c":
                    return <Form/>
            }
        }
        return (<div className="Multi-card"></div>)
    }
}

export default Multi