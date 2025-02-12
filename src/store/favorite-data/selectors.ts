import { NameSpace, RequestStatus } from '../../const';
import { State } from '../../types/state';

export const getFavorites = (state: State) => state[NameSpace.Favorite].favorites;
export const getFavoritesLoading = (state: State) =>
  state[NameSpace.Favorite].favoritesStatus === RequestStatus.Idle ||
  state[NameSpace.Favorite].favoritesStatus === RequestStatus.Loading;
export const getFavoritesUploadStatus = (state: State) => state[NameSpace.Favorite].favoriteUploadStatus;
export const getFavoriteByOfferId = (state: State, offerId: string) =>
  state[NameSpace.Favorite].favorites.findIndex((offerCard) => offerCard.id === offerId) !== -1;
export const getFavoritesCount = (state: State) => getFavoritesLoading(state) ? '...' : String(state[NameSpace.Favorite].favorites.length);
