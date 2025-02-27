export const MapInfo = {
  TileLayer: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
} as const;

export const MarkerInfo = {
  UrlDefault: '/public/img/pin.svg',
  UrlActive: '/public/img/pin-active.svg',
  Width: 28,
  Height: 40,
  Left: 14,
  Top: 40,
} as const;
