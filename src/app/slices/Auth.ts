import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { api } from '../api';
import { RootState } from '../rootReducer';

// A token gets returned which we will save in local storage
export const login = createAsyncThunk('auth/login', async (details: { email: string; password: string }, thunkAPI) => {
  const response = await api.post('/auth/login', {
    email: details.email,
    password: details.password,
  });

  localStorage.setItem('token', response.data.token);
  localStorage.setItem('user', JSON.stringify(response.data.user));

  return response.data;
});

export const registerUser = createAsyncThunk('auth/register', async (details: any, thunkAPI) => {
  const response = await api.post(
    '/auth/register',
    {
      _id: details._id,
      fullName: details.fullName,
      city: details.city,
      email: details.email,
      isRegistered: details.isRegistered,
      token: details.token,
    },
    {
      headers: {
        Authorization: `Bearer ${details.token}`,
      },
    },
  );

  localStorage.setItem('user', JSON.stringify(response.data.user));
  return response.data;
});

export type User = {
  _id: string;
  email: string;
  fullName: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Slice
type SliceState = {
  isLoggedIn: boolean;
  token: null | string;
  user: null | User;
  isRegistered: boolean | null;
  status: 'idle' | 'pending' | 'error' | 'fulfilled';
  error: { message: null; type: null } | { message: string; type: string };
};

const initialState: SliceState = {
  isLoggedIn: false,
  token: null,
  user: null,
  status: 'idle',
  error: { message: null, type: null },
  isRegistered: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: {
      reducer(state, action) {
        state.isLoggedIn = false;
        state.token = null;
        state.user = null;
      },
      prepare(payload) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        return { payload, meta: {}, error: false };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.status = 'pending';
      state.error.message = null;
      state.error.type = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.status = 'fulfilled';
    });
    builder.addCase(login.rejected, (state, action: any) => {
      console.log(action.error);
      state.status = 'error';
      state.error.message = action.error.message;
      state.error.type = 'login';
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.status = 'fulfilled';
    });
  },
});
export default slice.reducer;

// Actions
export const { setUser, logout } = slice.actions;

// Selectors
export const getAuth = (state: RootState) => state.auth;

export const selectIsAuthLoading = createSelector(getAuth, (auth) => auth.status === 'pending');
export const selectAuthStatus = createSelector(getAuth, (auth) => auth.status);
export const selectAuthError = createSelector(getAuth, (auth) => auth.error);

export const selectIsUserLoggedIn = createSelector(getAuth, (auth) => auth.isLoggedIn && auth.isRegistered);
export const selectIsUserRegistered = createSelector(getAuth, (auth) => auth.isRegistered);
export const selectUser = createSelector(getAuth, (auth) => auth.user);
