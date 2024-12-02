export const ID_PARAM = ':id';

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
