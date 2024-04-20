import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";


const MapComponent = () => {
  const mapState = {
    center: [55.76, 37.64], // Координаты центра карты
    zoom: 10 // Уровень масштабирования
  };

  const placemarkGeometry = [55.819323, 37.663243]; // Координаты для маркера

  const placemarkProperties = {
    hintContent: "Место на карте" // Текст подсказки при наведении на маркер
  };

  return (
    <div className="rounded-map-container">
    <YMaps query={{ apikey: '06f65b5e-e882-43e6-a22e-778a667a15f2' }}>
      <Map defaultState={mapState} width="100%" height="600px">
        {/* Добавляем маркер на карту */}
        <Placemark geometry={placemarkGeometry} properties={placemarkProperties} />
      </Map>
    </YMaps>
    </div>
  );
};

export default MapComponent;
