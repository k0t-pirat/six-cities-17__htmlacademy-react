import { useEffect, useRef } from 'react';
import useMap from './use-map';
import leaflet from 'leaflet';
import { MarkerInfo } from './const';
import { MapPoint } from '../../types/offer';

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
      const defaultCustomIcon = leaflet.icon({
        iconUrl: MarkerInfo.UrlDefault,
        iconSize: [MarkerInfo.Width, MarkerInfo.Height],
        iconAnchor: [MarkerInfo.Left, MarkerInfo.Top],
      });

      const activeCustomIcon = leaflet.icon({
        iconUrl: MarkerInfo.UrlActive,
        iconSize: [MarkerInfo.Width, MarkerInfo.Height],
        iconAnchor: [MarkerInfo.Left, MarkerInfo.Top],
      });

      mapPoints.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: activeOfferId === point.id ? activeCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, mapPoints, activeOfferId]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
