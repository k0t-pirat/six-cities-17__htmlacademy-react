import { createSlice } from '@reduxjs/toolkit';
import { AuthorizarionStatus, NameSpace } from '../../const';
import { checkAuth, login, logout } from '../api-actions';
import { AuthData } from '../../types/user';

const initialState = {
  authorizarionStatus: AuthorizarionStatus.Unknown,
  authData: null as null | AuthData,
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizarionStatus = AuthorizarionStatus.Auth;
        state.authData = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizarionStatus = AuthorizarionStatus.NoAuth;
        state.authData = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizarionStatus = AuthorizarionStatus.Auth;
        state.authData = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authorizarionStatus = AuthorizarionStatus.NoAuth;
        state.authData = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizarionStatus = AuthorizarionStatus.NoAuth;
        state.authData = null;
      });
  }
});
