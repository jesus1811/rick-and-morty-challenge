import { Location } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Location[] = [];

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    readLocations: (state, action) => action.payload,
  },
});
const { readLocations } = locationsSlice.actions;
const { reducer } = locationsSlice;

export { reducer as reducerLocations, readLocations };
