import { createAction } from '@reduxjs/toolkit';
import { Offer, OfferCard } from '../types/offer';
import { AuthorizarionStatus, RequestStatus, SortItem } from '../const';
import { AuthData } from '../types/user';
import { Review } from '../types/review';

export const changeCity = createAction<string>('app/changeCity');

export const changeSorting = createAction<SortItem>('app/changeSorting');

export const loadOfferCards = createAction<OfferCard[]>('data/loadOffers');
export const setOfferCardsLoading = createAction<RequestStatus>('data/setOfferCardsLoading');

export const loadCurrentOffer = createAction<Offer | null>('data/loadCurrentOffer');
export const setCurrentOfferStatus = createAction<RequestStatus>('data/setCurrentOfferStatus');

export const loadNearOfferCards = createAction<OfferCard[]>('data/loadNearOfferCards');

export const loadReviews = createAction<Review[]>('data/loadReviews');
export const addReview = createAction<Review>('data/addReview');
export const setReviewUploadStatus = createAction<RequestStatus>('data/setReviewUploadStatus');

export const setAuthorizationStatus = createAction<AuthorizarionStatus>('user/setAuthorizationStatus');
export const setAuthData = createAction<AuthData | null>('user/setAuthData');
