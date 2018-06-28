import React, { Component } from "react"
import Atlas from "./Atlas"
require("dotenv").config()

class Map extends Component {
  render() {
    const clicked = this.props.currentArt
    const message = this.props.currentArt ? this.props.currentArt.description : "Denver Art Museum"
    let mapLocation = rightLocation()
    function rightLocation() {
      if (clicked === null) {
        return { lat: 39.7371342, lng: -104.9894632 }
      }
      else {
        return this.props.currentArt.location
      }
    }
    return (
      <div className="map-container">
        <h3>Maps</h3>
        <Atlas
          markerMessage={message}
          locale={mapLocation}
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
