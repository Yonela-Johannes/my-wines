import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  google: {
    email: ''
  },
  linkedin: {
    email: ''
  },
  facebook: {
    email: ''
  },
  ga4: {
    email: ''
  },
  shopify: {
    email: ''
  },
  woo: {
    email: ''
  }
}

export const authorizedChannels = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    facebookEmail: (state, action) => {
      state.facebook.email = action.payload
    },
    googleEmail: (state, action) => {
      state.google.email = action.payload
    },
    shopifyEmail: (state, action) => {
      state.shopify.email = action.payload
    },
    g4a: (state, action) => {
      state.g4a.email = action.payload
    },
  }
})

export const { facebookEmail,googleEmail, shopifyEmail, g4a } = authorizedChannels.actions;

export default authorizedChannels.reducer;
