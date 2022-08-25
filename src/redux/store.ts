import { Character } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "./slices/charactersSlice";

export interface AppStore {
  characters: any;
}

export const Store = configureStore<AppStore>({
  reducer: {
    characters: characterSlice.reducer,
  },
});
