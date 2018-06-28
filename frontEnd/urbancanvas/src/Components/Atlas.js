import React from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
const { compose, withStateHandlers } = require("recompose");

const Atlas = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
  withScriptjs,
  withGoogleMap
)(props =>

  <GoogleMap
    defaultZoom={14}
    defaultCenter={props.locale}
  >
    <Marker
      position={props.locale}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>{props.markerMessage}</div>
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);
export default Atlas;