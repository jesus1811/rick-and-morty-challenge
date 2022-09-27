import { createSlice } from '@reduxjs/toolkit';

const initialState: number = 1;

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    nextPage: state => state + 1,
    prevPage: state => {
      if (state !== 1) return state - 1;
      return state;
    }
  }
});

const { nextPage, prevPage } = pageSlice.actions;
const { reducer } = pageSlice;

export { nextPage, prevPage, reducer as reducerPage };
