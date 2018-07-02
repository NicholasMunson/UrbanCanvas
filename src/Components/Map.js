import React, { Component } from "react"
import Atlas from "./Atlas"

class Map extends Component {
  render() {
    const clicked = this.props.currentArt
    const message = clicked.description ? clicked.description : "Denver Art Museum"
    let mapLocation = clicked.lat && clicked.lng ? { lat: clicked.lat, lng: clicked.lng } : { lat: 39.7371342, lng: -104.9894632 }

    return (
      <div className="map-container">
        <Atlas
          markerMessage={message}
          locale={mapLocation}
          isMarkerShown
          googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyBSmsnPh2Lf49uWpmWAKqsRXVtQGGUYzIE&v=3.exp&libraries=geometry,drawing,places"}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `300px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map
