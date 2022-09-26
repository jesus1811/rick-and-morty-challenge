import { Character } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Character[] = [];
const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState,
  reducers: {
    readCharacters: (state, action) => action.payload,
  },
});
const { readCharacters } = charactersSlice.actions;
const { reducer } = charactersSlice;
export { reducer as reducerCharacters, readCharacters };
