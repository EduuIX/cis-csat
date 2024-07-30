// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import averageReducer from './averageSlice';

const store = configureStore({
  reducer: {
    average: averageReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
