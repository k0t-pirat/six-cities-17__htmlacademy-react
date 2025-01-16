export const ID_PARAM = ':id';
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Root = '/',
  Offer = '/offer/:id',
  Favorites = '/favorites',
  Login = '/login',
  NotFound = '/404',
}

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
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

export enum RequestStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Uploading = 'Uploading',
  Success = 'Success',
  Error = 'Error',
}
