import { createAction } from '@reduxjs/toolkit';
import { OfferCard } from '../types/offer';

export const changeCity = createAction<string>('app/changeCity');

export const loadOfferCards = createAction<OfferCard[]>('data/loadOffers');
