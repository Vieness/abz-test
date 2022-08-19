import {createSlice} from "@reduxjs/toolkit";
import {rootApi} from "../../../app/rootApi";

const initialState = {
  token: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, {payload}) => {
      state.token = payload
    },
    removeToken: () => initialState
  },
  extraReducers: builder => {
    builder.addMatcher(
      rootApi.endpoints.getToken.matchFulfilled,  // boolean
      (state, {payload}) => {
        localStorage.setItem('access_token', payload.token)
        state.token = payload.token
      }
    )
  }
})

export const {setToken, removeToken} = authSlice.actions;

export default authSlice.reducer