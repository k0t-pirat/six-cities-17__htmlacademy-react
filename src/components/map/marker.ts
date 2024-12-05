import leaflet from 'leaflet';
import { MarkerInfo } from './const';
import { MapPoint } from '../../types/offer';

const createCustomIcon = (url: string) => (
  leaflet.icon({
    iconUrl: url,
    iconSize: [MarkerInfo.Width, MarkerInfo.Height],
    iconAnchor: [MarkerInfo.Left, MarkerInfo.Top],
  })
);
const defaultCustomIcon = createCustomIcon(MarkerInfo.UrlDefault);
const activeCustomIcon = createCustomIcon(MarkerInfo.UrlActive);

export { Marker } from 'leaflet';
export const createMarker = (point: MapPoint, activeOfferId: string) => (
  leaflet
    .marker({
      lat: point.location.latitude,
      lng: point.location.longitude,
    }, {
      icon: activeOfferId === point.id ? activeCustomIcon : defaultCustomIcon,
    })
);
