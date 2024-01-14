import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import marketingReportReducer from './features/marketingReport/marketingReportSlice';
import conversionsReportReducer from './features/conversionsReport/conversionsReportSlice';
import ecommerceReportReducer from './features/ecommerceReport/ecommerceReportSlice';
import channelReducer from './features/authorizedChannels/authorzedChannels';
import ecommerceButtonReducer from './features/ecommerceReport/ecommerceButtonsSlice';

// Combine the reducers
const rootReducer = combineReducers({
  marketing: marketingReportReducer,
  conversions: conversionsReportReducer,
  ecommerce: ecommerceReportReducer,
  channels: channelReducer,
  e_buttons: ecommerceButtonReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
