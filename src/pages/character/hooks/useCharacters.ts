import { useEffect, useState } from 'react';
import { charactersAdapter } from '@/adapters';
import { getCharactersService } from '@/services';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { readCharacters } from '@/redux/slices';

export const useCharacters = (counterPage: number) => {
  const [isLoaderCharacters, setIsLoaderCharacters] = useState<boolean>(true);
  const characters = useSelector((store: AppStore) => store.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    const getCharacters = async () => {
      const results = await getCharactersService(setIsLoaderCharacters, counterPage);
      dispatch(readCharacters(results.map((result) => charactersAdapter(result))));
    };
    getCharacters();
  }, [dispatch, counterPage]);
  return {
    characters,
    isLoaderCharacters
  };
};
