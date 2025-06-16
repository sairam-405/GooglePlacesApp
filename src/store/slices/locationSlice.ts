import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LocationState {
  lat: number;
  lng: number;
  name: string;
  address: string;
}

const initialState: LocationState = {
  lat: 0,
  lng: 0,
  name: '',
  address: '',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationState>) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
      state.name = action.payload.name;
      state.address = action.payload.address;
    },
    clearLocation: (state) => {
      state.lat = 0;
      state.lng = 0;
      state.name = '';
      state.address = '';
    },
  },
});

export const { setLocation, clearLocation } = locationSlice.actions;
export default locationSlice.reducer;