import React from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";


const Atlas = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 39.7576749, lng: -105.006952 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 39.7576749, lng: -105.006952 }} />}
  </GoogleMap>
));


// const Atlas = withScriptjs(withGoogleMap(
//   withStateHandlers(() => ({
//     isOpen: false,
//   }), {
//       onToggleOpen: ({ isOpen }) => () => ({
//         isOpen: !isOpen,
//       })
//     }),
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <Marker
//       position={{ lat: -34.397, lng: 150.644 }}
//       onClick={props.onToggleOpen}
//     >
//       {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
//         <FaAnchor />
//       </InfoWindow>}
//     </Marker>
//   </GoogleMap>
// )











export default Atlas;

