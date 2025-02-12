import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { fetchFavorites, updateFavorite } from '../api-actions';
import { OfferCard } from '../../types/offer';

const initialState = {
  favorites: [] as OfferCard[],
  favoritesStatus: RequestStatus.Idle,
  favoriteUploadStatus: RequestStatus.Idle,
};

export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.favoritesStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.favoritesStatus = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.favoritesStatus = RequestStatus.Error;
      })
      .addCase(updateFavorite.pending, (state) => {
        state.favoriteUploadStatus = RequestStatus.Uploading;
      })
      .addCase(updateFavorite.fulfilled, (state, action) => {
        const favoriteIndex = state.favorites.findIndex((offerCard) => offerCard.id === action.payload.id);

        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites.splice(favoriteIndex, 1);
        }
        state.favoriteUploadStatus = RequestStatus.Success;
      })
      .addCase(updateFavorite.rejected, (state) => {
        state.favoriteUploadStatus = RequestStatus.Error;
      });
  }
});

export const {clearFavorites} = favoriteData.actions;
