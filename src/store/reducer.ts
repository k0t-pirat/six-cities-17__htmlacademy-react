import { createReducer } from '@reduxjs/toolkit';
import { AuthorizarionStatus, CITIES, SortItem } from '../const';
import { changeCity, changeSorting, loadOfferCards, setAuthData, setAuthorizationStatus, setOfferCardsLoading } from './action';
import { OfferCard } from '../types/offer';
import { AuthData } from '../types/user';


const initialState = {
  currentCity: CITIES[3],
  currentSort: SortItem.Popular,
  offerCards: [] as OfferCard[],
  areOfferCardsLoading: false,
  authorizarionStatus: AuthorizarionStatus.NoAuth,
  authData: null as AuthData | null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOfferCards, (state, action) => {
      state.offerCards = action.payload;
    })
    .addCase(setOfferCardsLoading, (state, action) => {
      state.areOfferCardsLoading = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizarionStatus = action.payload;
    })
    .addCase(setAuthData, (state, action) => {
      state.authData = action.payload;
    });
});
