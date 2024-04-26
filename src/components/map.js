import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";


const MapComponent = () => {
  const mapState = {
    center: [55.76, 37.64], 
    zoom: 10 
  };

  const placemarkGeometry = [55.819323, 37.663243]; 

  const placemarkProperties = {
    hintContent: "Место на карте" 
  };

  return (
    <div className="rounded-map-container">
    <YMaps query={{ apikey: '06f65b5e-e882-43e6-a22e-778a667a15f2' }}>
      <Map className="mapsize" defaultState={mapState}>
        <Placemark geometry={placemarkGeometry} properties={placemarkProperties} />
      </Map>
    </YMaps>
    </div>
  );
};

export default MapComponent;
