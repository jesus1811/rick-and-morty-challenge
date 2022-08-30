import { Character } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Character[] = [];

export const charactersSlice = createSlice({
  name: "charactersSlice",
  initialState,
  reducers: {
    readCharacters: (state, action) => action.payload,
  },
});

export const { readCharacters } = charactersSlice.actions;
