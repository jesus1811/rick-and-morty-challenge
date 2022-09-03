import { Character, Episode } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { charactersSlice, episodesSlice } from './slices';
export interface AppStore {
  characters: Character[];
  episodes: Episode[];
}

export const Store = configureStore<AppStore>({
  reducer: {
    characters: charactersSlice.reducer,
    episodes: episodesSlice.reducer,
  },
});
