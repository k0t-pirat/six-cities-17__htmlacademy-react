import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer, OfferCard, OfferFavorite } from '../types/offer';
import { AppDisaptch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { AuthData, AuthPayload } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { Review, UploadReveiwData } from '../types/review';
import { toast } from 'react-toastify';

type AppThunkArgs = {
  dispatch: AppDisaptch;
  state: State;
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<OfferCard[], undefined, AppThunkArgs>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<OfferCard[]>(APIRoute.Offers);
      return data;
    } catch {
      toast.warn('Could not find offers');
      return [];
    }
  }
);

export const fetchCurrentOffer = createAsyncThunk<Offer, string, AppThunkArgs>(
  'data/fetchCurrentOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchNearOfferCards = createAsyncThunk<OfferCard[], string, AppThunkArgs>(
  'data/fetchNearOfferCards',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferCard[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Review[], string, AppThunkArgs>(
  'data/fetchOfferReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  }
);

export const uploadReview = createAsyncThunk<Review, UploadReveiwData, AppThunkArgs>(
  'data/uploadReview',
  async ({offerId, reviewPayload}, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Reviews}/${offerId}`, reviewPayload);
    return data;
  }
);

export const checkAuth = createAsyncThunk<AuthData, undefined, AppThunkArgs>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data: userData} = await api.get<AuthData>(APIRoute.Login);
    return userData;
  }
);

export const login = createAsyncThunk<AuthData, AuthPayload, AppThunkArgs>(
  'user/login',
  async (authPayload, {extra: api}) => {
    const {data: userData} = await api.post<AuthData>(APIRoute.Login, authPayload);
    saveToken(userData.token);
    return userData;
  }
);

export const logout = createAsyncThunk<void, undefined, AppThunkArgs>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const fetchFavorites = createAsyncThunk<OfferCard[], undefined, AppThunkArgs>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferCard[]>(APIRoute.Favorite);
    return data;
  }
);

export const updateFavorite = createAsyncThunk<OfferCard, {offerId: string; isFavorite: boolean}, AppThunkArgs>(
  'data/updateFavorite',
  async ({offerId, isFavorite: previousFavorite}, {extra: api}) => {
    const {data} = await api.post<OfferFavorite>(`${APIRoute.Favorite}/${offerId}/${Number(!previousFavorite)}`);
    const {id, title, type, price, city, location, isFavorite, isPremium, rating, previewImage} = data;
    return {id, title, type, price, city, location, isFavorite, isPremium, rating, previewImage};
  }
);
