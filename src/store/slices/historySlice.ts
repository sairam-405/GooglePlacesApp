import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
  lat: number;
  lng: number;
  name: string;
  address: string;
}

const historySlice = createSlice({
  name: 'history',
  initialState: [] as LocationState[],
  reducers: {
    addToHistory: (state, action: PayloadAction<LocationState>) => {
      const exists = state.find(item => item.name === action.payload.name);
      if (!exists) {
        state.unshift(action.payload);
        if (state.length > 10) state.pop(); // keep latest 10
      }
    },
    setHistory: (_state, action: PayloadAction<LocationState[]>) => action.payload,
  },
});

export const { addToHistory, setHistory } = historySlice.actions;
export default historySlice.reducer;
