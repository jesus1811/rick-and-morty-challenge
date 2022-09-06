import React, { useEffect, useState } from 'react';
import { Layout, Loading, Title } from '@/components';
import { episodeService } from '@/services';
import { Banner, EpisodeCard, Pagination } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '@/redux/store';
import { episodesAdapter } from '@/adapters';
import styles from './home.module.scss';
import { episodesSlice } from '@/redux/slices';
import { useCounterSeason } from './hooks';

const Home = () => {
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const dispatch = useDispatch();
  const episodes = useSelector((store: AppStore) => store.episodes);
  const { counterSeason, handleCounterSeason } = useCounterSeason();

  const getEpisodes = async () => {
    const results = await episodeService.getEpisodesService(setIsLoader);
    dispatch(episodesSlice.readEpisodes(results.map((result) => episodesAdapter(result))));
  };
  useEffect(() => {
    getEpisodes();
  }, []);
  return (
    <Layout
      title="Rickvana | Home"
      description="Plataforma de rick and morty para ver la serie e informarse"
    >
      <Banner />
      <Title variant="primary">Episodes</Title>
      <Pagination season={counterSeason} setSeason={handleCounterSeason} />
      {isLoader ? (
        <Loading />
      ) : (
        <div className={styles.cards}>
          {episodes
            .filter((episode) => episode.episode.slice(1, 3) === `0${counterSeason}`)
            .map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
        </div>
      )}
      <Pagination season={counterSeason} setSeason={handleCounterSeason} />
    </Layout>
  );
};

export default Home;
