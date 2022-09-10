import React, { useEffect, useState } from 'react';
import { Layout, Loading, Title } from '@/components';
import { Banner, EpisodeCard, Modal, Pagination } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { episodesAdapter } from '@/adapters';
import styles from './home.module.scss';
import { useCounterSeason } from './hooks';
import { getEpisodesService } from '@/services';
import { readEpisodes } from '@/redux/slices';
import { AppStore } from '@/redux/store';
import io from 'socket.io-client';
import { Message } from '@/models';

const socket = io('http://localhost:3001');

const Home = () => {
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const [messages, setMessages] = useState<Message[]>([]);
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
  useEffect(() => {
    socket.emit('initial', 1);
    socket.on('message', (messages) => {
      setMessages(messages);
    });
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
              <EpisodeCard key={episode.id} episode={episode} messages={messages} />
            ))}
        </div>
      )}
      <Pagination season={counterSeason} setSeason={handleCounterSeason} />
    </Layout>
  );
};

export default Home;
