import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AverageStateType = {
  overallAverage: number;
};

const initialState: AverageStateType = {
  overallAverage: 0,
};

const averageSlice = createSlice({
  name: 'average',
  initialState,
  reducers: {
    setOverallAverage(state, action: PayloadAction<number>) {
      state.overallAverage = action.payload;
    },
  },
});

export const { setOverallAverage } = averageSlice.actions;
export default averageSlice.reducer;
