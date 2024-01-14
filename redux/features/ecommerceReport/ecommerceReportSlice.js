import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "ecommerce",
  name: '',
  reportChannels: [{
    ga4: {
      account: {
        id: '',
        descriptiveName: ''
      },
      property: {
        id: '',
        name: '',
      },
      stream: {
        id: '',
        name: '',
      },
    },
  }],
}

export const ecommerceReport = createSlice({
  name: 'ecommerce',
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
      if(findChannel){
        const filteredArray = state.channels.filter(elem => elem !==  findChannel)
        state.channels = filteredArray
      }else{
        state.channels.push(action.payload)
      }
    },
    addAccount: (state, action) => {
      const updatedReportChannels = state.reportChannels.map((channel, x)=> {
        if (channel.ga4) {
          const account = action.payload;
          return {
            ...channel,
            ga4: {
              ...channel.ga4,
              account: {
                id: account.id,
                name: account.label,
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
    addProperty: (state, action) => {
      const updatedReportChannels = state.reportChannels.map((channel, x)=> {
        if (channel.ga4) {
          const account = action.payload[x];
          return {
            ...channel,
            ga4: {
              ...channel.ga4,
              property: {
                id: account.id,
                name: account.label,
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
    addStream: (state, action) => {
      const updatedReportChannels = state.reportChannels.map((channel, x)=> {
        if (channel.ga4) {
          const account = action.payload[x];
          return {
            ...channel,
            ga4: {
              ...channel.ga4,
              stream: {
                id: account.id,
                name: account.label,
              },
            },
          };
        }
        return channel;
      });
  }
}})

export const { reportType, reportTitle, addAccount, addProperty, addStream} = ecommerceReport.actions;

export default ecommerceReport.reducer;
