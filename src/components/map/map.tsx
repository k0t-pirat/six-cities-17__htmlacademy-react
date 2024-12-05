import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapInfo } from './const';

const CITY_TEMP = {
  'latitude': 52.35514938496378,
  'longitude': 4.673877537499948,
  'zoom': 8
};

export default function Map() {
  const mapRef = useRef(null);
  const isRenderedRef = useRef(false);
  const city = CITY_TEMP;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(MapInfo.TileLayer, { attribution: MapInfo.Attribution })
        .addTo(instance);

      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
