import { Character, Episode, Location } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { reducerCharacters, reducerEpisodes, reducerLocations, reducerPage, reducerSeason } from './slices';
interface AppStore {
  characters: Character[];
  episodes: Episode[];
  locations: Location[];
  season: number;
  page: number;
}

const Store = configureStore<AppStore>({
  reducer: {
    characters: reducerCharacters,
    locations: reducerLocations,
    episodes: reducerEpisodes,
    season: reducerSeason,
    page: reducerPage
  }
});

export { type AppStore, Store };
