import { createAction } from '@reduxjs/toolkit';
import { OfferCard } from '../types/offer';

export const changeCity = createAction('app/changeCity');

export const loadOfferCards = createAction<OfferCard[]>('data/loadOffers');
