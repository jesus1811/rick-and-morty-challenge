import { useEffect, useState } from 'react';
import { episodesAdapter } from '@/adapters';
import { readEpisodes } from '@/redux/slices';
import { AppStore } from '@/redux/store';
import { getEpisodesService } from '@/services';
import { useDispatch, useSelector } from 'react-redux';

const useEpisodes = () => {
  const disptach = useDispatch();
  const [isLoaderEpisodes, setIsLoaderEpisodes] = useState<boolean>(true);
  const episodes = useSelector((store: AppStore) => store.episodes);
  useEffect(() => {
    const getEpisodes = async () => {
      const results = await getEpisodesService(setIsLoaderEpisodes);
      disptach(readEpisodes(results.map(result => episodesAdapter(result))));
    };
    getEpisodes();
  }, [disptach]);
  return {
    episodes,
    isLoaderEpisodes
  };
};

export default useEpisodes;
