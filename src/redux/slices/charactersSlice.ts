import { Character } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Character[] = [
  {
    id: null,
    name: "",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [""],
    url: "",
    created: "",
  },
];

export const characterSlice = createSlice({
  name: "charactersSlice",
  initialState,
  reducers: {
    readCharacters: (state, action) => action.payload,
  },
});
