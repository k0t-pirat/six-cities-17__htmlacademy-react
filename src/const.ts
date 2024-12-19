export const ID_PARAM = ':id';
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Root = '/',
  Offer = '/offer/:id',
  Favorites = '/favorites',
  Login = '/login',
  NotFound = '*',
}

export enum AuthorizarionStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortItem {
  Popular = 'Popular',
  PriceLow = 'Price: low to high',
  PriceHigh = 'Price: high to low',
  Rating = 'Top rated first',
}
