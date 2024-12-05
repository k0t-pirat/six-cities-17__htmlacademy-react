import { useEffect, useRef } from 'react';
import useMap from './use-map';
import { MapPoint } from '../../types/offer';
import { createMarker, Marker } from './marker';

type MapProps = {
  mapPoints: MapPoint[];
  activeOfferId: string;
}

export default function Map({mapPoints, activeOfferId}: MapProps) {
  const mapRef = useRef(null);
  const currentCityLocation = mapPoints[0].city.location;
  const map = useMap(mapRef, currentCityLocation);

  useEffect(() => {
    if (map) {
      const markers: Marker[] = [];
      mapPoints.forEach((point) => {
        const marker = createMarker(point, activeOfferId).addTo(map);
        markers.push(marker);
      });

      return () => {
        markers.forEach((marker) => {
          marker.removeFrom(map);
        });
      };
    }
  }, [map, mapPoints, activeOfferId]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
