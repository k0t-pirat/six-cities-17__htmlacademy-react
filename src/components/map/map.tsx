import { useEffect, useMemo, useRef } from 'react';
import useMap from './use-map';
import { MapPoint } from '../../types/offer';
import { createMarker, Marker } from './marker';

type MapProps = {
  mapPoints: MapPoint[];
  activeOfferId: string;
  className?: string;
}

const DEFAULT_CLASS_NAME = 'cities';

export default function Map({mapPoints, activeOfferId, className = DEFAULT_CLASS_NAME}: MapProps) {
  const mapRef = useRef(null);
  const currentCityLocation = useMemo(() => mapPoints[0].city.location, [mapPoints]) ;
  const shouldZoomOnScroll = useMemo(() => className === DEFAULT_CLASS_NAME, [className]) ;
  const map = useMap(mapRef, currentCityLocation, shouldZoomOnScroll);

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
    <section className={`${className}__map map`} ref={mapRef}></section>
  );
}
