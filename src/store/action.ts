import { createAction } from '@reduxjs/toolkit';
import { OfferCard } from '../types/offer';
import { SortItem } from '../const';

export const changeCity = createAction<string>('app/changeCity');

export const changeSorting = createAction<SortItem>('app/changeSorting');

export const loadOfferCards = createAction<OfferCard[]>('data/loadOffers');
