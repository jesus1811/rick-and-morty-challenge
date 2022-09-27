import { Character, Episode, Location } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { reducerCharacters, reducerEpisodes, reducerLocations, reducerSeason } from './slices';
interface AppStore {
  characters: Character[];
  episodes: Episode[];
  locations: Location[];
  season: number;
}

const Store = configureStore<AppStore>({
  reducer: {
    characters: reducerCharacters,
    locations: reducerLocations,
    episodes: reducerEpisodes,
    season: reducerSeason
  }
});

export { type AppStore, Store };
