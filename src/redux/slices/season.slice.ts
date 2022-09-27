import { createSlice } from '@reduxjs/toolkit';

const initialState = 1;

const seasonSlice = createSlice({
  name: 'season',
  initialState,
  reducers: {
    addSeason: (state, action) => {
      return action.payload;
    }
  }
});

const { addSeason } = seasonSlice.actions;
const { reducer } = seasonSlice;

export { addSeason, reducer as reducerSeason };
