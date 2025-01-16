import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadOfferCards, setAuthorizationStatus, setOfferCardsLoading, setAuthData, loadCurrentOffer, setCurrentOfferStatus,
  loadNearOfferCards, loadReviews, addReview,
  setReviewUploadStatus} from './action';
import { Offer, OfferCard } from '../types/offer';
import { AppDisaptch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizarionStatus, RequestStatus } from '../const';
import { AuthData, AuthPayload } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { Review, UploadReveiwData } from '../types/review';
import { toast } from 'react-toastify';

type AppThunkArgs = {
  dispatch: AppDisaptch;
  state: State;
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<void, undefined, AppThunkArgs>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setOfferCardsLoading(RequestStatus.Loading));
      const {data} = await api.get<OfferCard[]>(APIRoute.Offers);
      dispatch(loadOfferCards(data));
    } catch {
      toast.warn('Could not find offers');
    } finally {
      dispatch(setOfferCardsLoading(RequestStatus.Idle));
    }
  }
);

export const fetchCurrentOffer = createAsyncThunk<void, string, AppThunkArgs>(
  'data/fetchCurrentOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setCurrentOfferStatus(RequestStatus.Loading));
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(loadCurrentOffer(data));
      dispatch(setCurrentOfferStatus(RequestStatus.Success));
    } catch {
      dispatch(loadCurrentOffer(null));
      dispatch(setCurrentOfferStatus(RequestStatus.Error));
    }
  }
);

export const fetchNearOfferCards = createAsyncThunk<void, string, AppThunkArgs>(
  'data/fetchNearOfferCards',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferCard[]>(`${APIRoute.Offers}/${offerId}/nearby`);
      dispatch(loadNearOfferCards(data));
    } catch {
      dispatch(loadNearOfferCards([]));
    }
  }
);

export const fetchReviews = createAsyncThunk<void, string, AppThunkArgs>(
  'data/fetchOfferReviews',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
      dispatch(loadReviews(data));
    } catch {
      dispatch(loadReviews([]));
    }
  }
);

export const uploadReview = createAsyncThunk<void, UploadReveiwData, AppThunkArgs>(
  'data/uploadReview',
  async ({offerId, reviewPayload}, {dispatch, extra: api}) => {
    dispatch(setReviewUploadStatus(RequestStatus.Uploading));
    try {
      const {data} = await api.post<Review>(`${APIRoute.Reviews}/${offerId}`, reviewPayload);
      dispatch(addReview(data));
      dispatch(setReviewUploadStatus(RequestStatus.Success));
    } catch {
      dispatch(setReviewUploadStatus(RequestStatus.Error));
    }
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
