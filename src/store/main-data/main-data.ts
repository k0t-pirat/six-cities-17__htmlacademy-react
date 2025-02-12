import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { fetchOffers } from '../api-actions';
import { OfferCard } from '../../types/offer';

const initialState = {
  offerCards: [] as OfferCard[],
  offerCardsLoadStatus: RequestStatus.Idle,
};

export const mainData = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.offerCardsLoadStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offerCardsLoadStatus = RequestStatus.Idle;
        state.offerCards = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offerCardsLoadStatus = RequestStatus.Idle;
        state.offerCards = [];
      });
  }
});
