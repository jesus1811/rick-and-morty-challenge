import { Character, Episode, Location } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { charactersSlice, episodesSlice, locationsSlice } from './slices';
export interface AppStore {
  characters: Character[];
  episodes: Episode[];
  locations: Location[];
}

export const Store = configureStore<AppStore>({
  reducer: {
    characters: charactersSlice.reducer,
    locations: locationsSlice.reducer,
    episodes: episodesSlice.reducer,
  },
});
