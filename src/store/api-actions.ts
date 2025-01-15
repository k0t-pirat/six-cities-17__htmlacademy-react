import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadOfferCards, setAuthorizationStatus, setOfferCardsLoading, setAuthData } from './action';
import { OfferCard } from '../types/offer';
import { AppDisaptch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizarionStatus } from '../const';
import { AuthData, AuthPayload } from '../types/user';
import { dropToken, saveToken } from '../services/token';

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

export const checkAuth = createAsyncThunk<void, undefined, AppThunkArgs>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: userData} = await api.get<AuthData>(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizarionStatus.Auth));
      dispatch(setAuthData(userData));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizarionStatus.NoAuth));
      dispatch(setAuthData(null));
    }
  }
);

export const login = createAsyncThunk<void, AuthPayload, AppThunkArgs>(
  'user/login',
  async (authPayload, {dispatch, extra: api}) => {
    try {
      const {data: userData} = await api.post<AuthData>(APIRoute.Login, authPayload);
      dispatch(setAuthorizationStatus(AuthorizarionStatus.Auth));
      dispatch(setAuthData(userData));
      saveToken(userData.token);
    } catch {
      dispatch(setAuthorizationStatus(AuthorizarionStatus.NoAuth));
      dispatch(setAuthData(null));
    }
  }
);

export const logout = createAsyncThunk<void, undefined, AppThunkArgs>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dispatch(setAuthorizationStatus(AuthorizarionStatus.NoAuth));
    dispatch(setAuthData(null));
    dropToken();
  }
);
