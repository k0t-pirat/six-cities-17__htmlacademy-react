import { NameSpace, RequestStatus } from '../../const';
import { State } from '../../types/state';

const MAX_NEAR_OFFERS_COUNT = 3;

export const getCurrentOffer = (state: State) => state[NameSpace.CurrentOffer].currentOffer;
export const getCurrentOfferLoading = (state: State) =>
  state[NameSpace.CurrentOffer].currentOfferStatus === RequestStatus.Idle ||
  state[NameSpace.CurrentOffer].currentOfferStatus === RequestStatus.Loading;
export const getNearOfferCards = (state: State) => state[NameSpace.CurrentOffer].nearOfferCards.slice(0, MAX_NEAR_OFFERS_COUNT);
