require('dotenv').config()
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 39.7576749, lng: -105.006952 }}
  >
    <MarkerWithLabel
      position={{ lat: 39.7576749, lng: -105.006952 }}
      labelAnchor={{ lat: 39.7576749, lng: -105.006952 }}
      labelStyle={{ backgroundColor: "#F79020", fontSize: "24px", padding: "12px" }}
    >
      <div>Galvanize</div>
    </MarkerWithLabel>
    {props.isMarkerShown && <Marker position={{ lat: 39.7576749, lng: -105.006952 }} />}
  </GoogleMap>
));

export default Map;