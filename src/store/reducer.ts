import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { loadOfferCards } from './action';
import { OfferCard } from '../types/offer';

const initialState = {
  currentCity: CITIES[3],
  offerCards: [] as OfferCard[],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOfferCards, (state, action) => {
      state.offerCards = action.payload;
    });
});
