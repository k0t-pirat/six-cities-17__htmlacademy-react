import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadOfferCards, setOfferCardsLoading } from './action';
import { OfferCard } from '../types/offer';
import { AppDisaptch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';

type AppThunkArgs = {
  dispatch: AppDisaptch;
  state: State;
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<void, undefined, AppThunkArgs>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOfferCardsLoading(true));
    const {data} = await api.get<OfferCard[]>(APIRoute.Offers);
    dispatch(setOfferCardsLoading(false));
    dispatch(loadOfferCards(data));
  }
);
