import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SortItem } from '../const';
import { changeCity, changeSorting, loadOfferCards, setOfferCardsLoading } from './action';
import { OfferCard } from '../types/offer';

const initialState = {
  currentCity: CITIES[3],
  currentSort: SortItem.Popular,
  offerCards: [] as OfferCard[],
  areOfferCardsLoading: false,
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
    });
});
