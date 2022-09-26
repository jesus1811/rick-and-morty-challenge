import { Episode } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Episode[] = [];

const episodesSlice = createSlice({
  name: 'episodesSlice',
  initialState,
  reducers: {
    readEpisodes: (state, action) => action.payload,
  },
});
const { readEpisodes } = episodesSlice.actions;
const { reducer } = episodesSlice;
export { reducer as reducerEpisodes, readEpisodes };
