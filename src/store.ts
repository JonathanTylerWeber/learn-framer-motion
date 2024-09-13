import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice';

// Configure the store
export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

// Infer the `RootState` type from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
