import { createReducer } from '@reduxjs/toolkit';
import { AuthorizarionStatus, CITIES, RequestStatus, SortItem } from '../const';
import { addReview, changeCity, changeSorting, loadCurrentOffer, loadNearOfferCards, loadOfferCards, loadReviews,
  setAuthData, setAuthorizationStatus, setCurrentOfferStatus, setOfferCardsLoading,
  setReviewUploadStatus} from './action';
import { Offer, OfferCard } from '../types/offer';
import { AuthData } from '../types/user';
import { Review } from '../types/review';


const initialState = {
  currentCity: CITIES[3],
  currentSort: SortItem.Popular,
  offerCards: [] as OfferCard[],
  areOfferCardsLoading: RequestStatus.Idle,
  authorizarionStatus: AuthorizarionStatus.NoAuth,
  authData: null as AuthData | null,
  currentOffer: null as Offer | null,
  currentOfferStatus: RequestStatus.Idle,
  nearOfferCards: [] as OfferCard[],
  reviews: [] as Review[],
  reviewUploadStatus: RequestStatus.Idle,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOfferCards, (state, action) => {
      state.offerCards = action.payload;
    })
    .addCase(setOfferCardsLoading, (state, action) => {
      state.areOfferCardsLoading = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setCurrentOfferStatus, (state, action) => {
      state.currentOfferStatus = action.payload;
    })
    .addCase(loadNearOfferCards, (state, action) => {
      state.nearOfferCards = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(setReviewUploadStatus, (state, action) => {
      state.reviewUploadStatus = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizarionStatus = action.payload;
    })
    .addCase(setAuthData, (state, action) => {
      state.authData = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    });
});
