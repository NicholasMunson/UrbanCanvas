import React, { Component } from "react"
import Atlas from "./Atlas"
require("dotenv").config()

class Map extends Component {
  render() {
    return (
      <div className="map-container">
        <h3>Maps</h3>
        <Atlas
          isMarkerShown
          googleMapURL={process.env.REACT_APP_MAP_KEY}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map
