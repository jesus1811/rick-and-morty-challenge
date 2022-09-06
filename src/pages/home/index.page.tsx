import React, { useEffect, useState } from 'react';
import { Button, Layout, Loading, Paragraph, Title } from '@/components';
import { episodeService } from '@/services';
import { Banner, EpisodeCard, Pagination } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '@/redux/store';
import { episodesAdapter } from '@/adapters';
import styles from './home.module.scss';
import { episodesSlice } from '@/redux/slices';

const Home = () => {
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const dispatch = useDispatch();
  const episodes = useSelector((store: AppStore) => store.episodes);
  const [season, setSeason] = useState<number>(1);

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
      <Pagination season={season} setSeason={setSeason} />
      {isLoader ? (
        <Loading />
      ) : (
        <div className={styles.cards}>
          {episodes
            .filter((episode) => episode.episode.slice(1, 3) === `0${season}`)
            .map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
        </div>
      )}
      <Pagination season={season} setSeason={setSeason} />
    </Layout>
  );
};

export default Home;
