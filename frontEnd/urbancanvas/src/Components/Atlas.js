import React from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


const Atlas = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 39.7576749, lng: -105.006952 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 39.7576749, lng: -105.006952 }} />}
  </GoogleMap>
));

export default Atlas;

