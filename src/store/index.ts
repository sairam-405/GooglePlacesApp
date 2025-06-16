import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';
import historyReducer from './slices/historySlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
