import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '50vh',
    width: '75%',
  };

  const defaultCenter = {
    lat: 19.4367,
    lng: -99.1718796,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyDy5Y5sWBUmsE2LuMdTsu9_E03qO7F9OyM">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
