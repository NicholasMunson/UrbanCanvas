import React, { Component } from "react"
import Atlas from "./Atlas"
require("dotenv").config()


class Map extends Component {
  render() {
    const propId = this.props.id
    const listOfArt = this.props.artList
    let mapLocation = rightLocation()
    function rightLocation() {
      if (propId === null) {
        return { lat: 39.7371342, lng: -104.9894632 }
      }
      else {
        var selectedArt = listOfArt.find(art => art.id === propId)
        return selectedArt.location
      }
    }
    return (
      <div className="map-container">
        <h3>Maps</h3>
        <Atlas
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
