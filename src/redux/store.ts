import { Character, Episode } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "./slices/charactersSlice";
import { episodesSlice } from "./slices/episodesSlice";

export interface AppStore {
  characters: Character[];
  episodes: Episode[];
}

export const Store = configureStore<AppStore>({
  reducer: {
    characters: characterSlice.reducer,
    episodes: episodesSlice.reducer,
  },
});
