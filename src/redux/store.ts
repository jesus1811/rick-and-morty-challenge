import { Character, Episode, Location } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { reducerCharacters, reducerEpisodes, reducerLocations } from './slices';
interface AppStore {
  characters: Character[];
  episodes: Episode[];
  locations: Location[];
}

const Store = configureStore<AppStore>({
  reducer: {
    characters: reducerCharacters,
    locations: reducerLocations,
    episodes: reducerEpisodes,
  },
});

export { type AppStore, Store };
