import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCurrentOffer, fetchNearOfferCards } from '../api-actions';
import { NameSpace, RequestStatus } from '../../const';
import { Offer, OfferCard } from '../../types/offer';

const initialState = {
  currentOffer: null as null | Offer,
  currentOfferStatus: RequestStatus.Idle,
  nearOfferCards: [] as OfferCard[],
};

export const offerData = createSlice({
  name: NameSpace.CurrentOffer,
  initialState,
  reducers: {
    setCurrentOfferStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.currentOfferStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentOffer.pending, (state) => {
        state.currentOfferStatus = RequestStatus.Loading;
      })
      .addCase(fetchCurrentOffer.fulfilled, (state, action) => {
        state.currentOfferStatus = RequestStatus.Success;
        state.currentOffer = action.payload;
      })
      .addCase(fetchCurrentOffer.rejected, (state) => {
        state.currentOfferStatus = RequestStatus.Error;
      })
      .addCase(fetchNearOfferCards.fulfilled, (state, action) => {
        state.nearOfferCards = action.payload;
      })
      .addCase(fetchNearOfferCards.rejected, (state) => {
        state.nearOfferCards = [];
      });
  }
});

export const {setCurrentOfferStatus} = offerData.actions;
