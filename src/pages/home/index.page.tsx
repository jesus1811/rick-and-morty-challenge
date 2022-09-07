import React, { useEffect, useState } from 'react';
import { Layout, Loading, Title } from '@/components';
import { Banner, EpisodeCard, Pagination } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { episodesAdapter } from '@/adapters';
import styles from './home.module.scss';
import { useCounterSeason } from './hooks';
import { getEpisodesService } from '@/services';
import { readEpisodes } from '@/redux/slices';
import { AppStore } from '@/redux/store';

const Home = () => {
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const dispatch = useDispatch();
  const episodes = useSelector((store: AppStore) => store.episodes);
  const { counterSeason, handleCounterSeason } = useCounterSeason();
  useEffect(() => {
    const getEpisodes = async () => {
      const results = await getEpisodesService(setIsLoader);
      dispatch(readEpisodes(results.map((result) => episodesAdapter(result))));
    };
    getEpisodes();
  }, [dispatch]);
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
