import React, { Component } from "react"
import Atlas from "./Atlas"
import SearchBox from "./SearchBox";
require("dotenv").config()

class Map extends Component {
  render() {
    const clicked = this.props.currentArt
    const message = clicked ? clicked.description : "Denver Art Museum"
    let mapLocation = clicked ? { lat: clicked.lat, lng: clicked.lng } : { lat: 39.7371342, lng: -104.9894632 }

    return (
      <div className="map-container">
        <h3>Maps</h3>
        <SearchBox />
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
