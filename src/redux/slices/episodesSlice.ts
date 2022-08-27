import { Episode } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Episode[] = [];

export const episodesSlice = createSlice({
  name: "episodesSlice",
  initialState,
  reducers: {
    readEpisodes: (state, action) => action.payload,
  },
});

export const { readEpisodes } = episodesSlice.actions;
