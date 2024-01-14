import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  name: '',
  channels: [],
  reportChannels: [{
    googleAds: {
      customer: {
        id: '',
        descriptiveName: ''
      },
      conversions: {
        id: '',
        name: '',
      },
    },
    facebookAds: {
      customer: {
        id: '',
        descriptiveName: ''
      },
      conversions: {
        id: '',
        name: '',
      },
    },
    linkedInAds: {
      customer: {
        id: '',
        descriptiveName: ''
      },
      conversions: {
        id: '',
        name: '',
      },
    },

  }],
}

export const marketingReport = createSlice({
  name: 'marketing',
  initialState,
  reducers: {
    reportType: (state, action) => {
      state.type = action.payload
    },
    reportTitle: (state, action) => {
      state.name = action.payload
    },
    addChannel: (state, action) => {
      const findChannel = state.channels.find(element => element === action.payload)
      console.log(findChannel)
      if(findChannel){
        const filteredArray = state.channels.filter(elem => elem !==  findChannel)
        state.channels = filteredArray
      }else{
        state.channels.push(action.payload)
      }
    },
    reportChannel: (state, action) => {
      state.googleAdsApi = !state.googleAdsApi
    },
    addCustomer: (state, action) => {
      console.log("Inside!!! the add customer: ", action.payload)
      const updatedReportChannels = state.reportChannels.map((channel)=> {
        if (channel.googleAds) {
          const customer = action.payload;
          return {
            ...channel,
            googleAds: {
              ...channel.googleAds,
              customer: {
                id: customer.id,
                descriptiveName: customer.label,
              },
            },
          };
        }
        return channel;
      });

      return {
        ...state,
        reportChannels: updatedReportChannels,
      };
    },
    addConversions: (state, action) => {
      const updatedReportChannels = state.reportChannels.map((channel, x)=> {
        if (channel.googleAds) {
          const conversions = action.payload;
          return {
            ...channel,
            googleAds: {
              ...channel.googleAds,
              conversions: {
                id: conversions.id,
                name: conversions.label,
              },
            },
          };
        }
        return conversion;
      });
      return {
        ...state,
        googleAdsFlowComplete: true,
        reportChannels: updatedReportChannels,
      };
    },
  }
})

export const {
  reportType,
  reportTitle,
  addChannel,
  reportChannel,
  addCustomer,
  addConversions,
} = marketingReport.actions;

export default marketingReport.reducer;
