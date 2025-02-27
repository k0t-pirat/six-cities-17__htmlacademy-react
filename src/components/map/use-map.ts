import { RefObject, useEffect, useRef, useState } from 'react';
import leaflet, { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapInfo } from './const';
import { Location } from '../../types/offer';

export default function useMap(mapRef: RefObject<HTMLElement | null>, location: Location, shouldZoomOnScroll: boolean) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (map) {
      map.panTo({
        lat: location.latitude,
        lng: location.longitude,
      });
    }
  }, [location, map]);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const mapInstance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
        scrollWheelZoom: shouldZoomOnScroll,
      });

      leaflet
        .tileLayer(MapInfo.TileLayer, { attribution: MapInfo.Attribution })
        .addTo(mapInstance);

      setMap(mapInstance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location, shouldZoomOnScroll]);

  return map;
}
