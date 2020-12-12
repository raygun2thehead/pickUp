import React, { useEffect, useState } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const Maps = (props) => {
  const [lat, setLat] = useState(41.8781);
  const [lng, setLng] = useState(-87.6298);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is : ", position.coords.latitude);
      console.log("Longitude is : ", position.coords.longitude);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  },[])

  return (
    <div className="map">
      <h2>Geolocation Example</h2>

      <Map google={props.google} initialCenter={{
        lat: lat,
        lng: lng
      }} zoom={8}>
      </Map>
    </div>
  )

}

//export default Maps;

export default GoogleApiWrapper({
  apiKey: "AIzaSyDW6lOOrNGtDEK_HD0glR1gBAUG7qCjL4o"
})(Maps)