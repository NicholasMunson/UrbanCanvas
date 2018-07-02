import React from 'react'
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs } from "react-google-maps"
import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox"
require("dotenv").config()

const SearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBSmsnPh2Lf49uWpmWAKqsRXVtQGGUYzIE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
  }),
  lifecycle({
    componentDidMount() {
      const refs = {}
      this.setState({
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          let theLocation = places[0].formatted_address
          let theLat = places[0].geometry.location.lat()
          let theLng = places[0].geometry.location.lng()
          this.props.addressUpdate({
            location: theLocation,
            lat: theLat,
            lng: theLng
          })
        },
      })
    },
  }),
  withScriptjs
)(props =>
  <div data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Please enter the address of the street piece you wish to add."
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `50%`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </StandaloneSearchBox>
  </div>
);

export default SearchBox
