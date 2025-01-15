import { createAction } from '@reduxjs/toolkit';
import { OfferCard } from '../types/offer';
import { AuthorizarionStatus, SortItem } from '../const';
import { AuthData } from '../types/user';

export const changeCity = createAction<string>('app/changeCity');

export const changeSorting = createAction<SortItem>('app/changeSorting');

export const loadOfferCards = createAction<OfferCard[]>('data/loadOffers');
export const setOfferCardsLoading = createAction<boolean>('data/setOfferCardsLoading');

export const setAuthorizationStatus = createAction<AuthorizarionStatus>('user/setAuthorizationStatus');
export const setAuthData = createAction<AuthData | null>('user/setAuthData');
