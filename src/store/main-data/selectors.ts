import { NameSpace, RequestStatus } from '../../const';
import { State } from '../../types/state';

export const getOfferCards = (state: State) => state[NameSpace.Main].offerCards;
export const getOfferCardsLoading = (state: State) => state[NameSpace.Main].offerCardsLoadStatus === RequestStatus.Loading;
