import leaflet from 'leaflet';
import { MarkerInfo } from './const';

export const createCustomIcon = (url: string) => (
  leaflet.icon({
    iconUrl: url,
    iconSize: [MarkerInfo.Width, MarkerInfo.Height],
    iconAnchor: [MarkerInfo.Left, MarkerInfo.Top],
  })
);
