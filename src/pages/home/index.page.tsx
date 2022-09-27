import { Layout, Loading, Title } from '@/components';
import { AppStore } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Banner, EpisodeCard, Pagination } from './components';
import styles from './home.module.scss';
import { useEpisodes, useMessages } from './hooks';

const Home = () => {
  const { isLoaderEpisodes, episodes } = useEpisodes();
  const { messages } = useMessages();
  const season = useSelector((store: AppStore) => store.season);
  const dispatch = useDispatch();
  return (
    <Layout title="Rickvana | Home" description="Plataforma de rick and morty para ver la serie e informarse">
      <Banner />
      <Title primary>Episodes</Title>
      <Pagination />
      {isLoaderEpisodes ? (
        <Loading />
      ) : (
        <div className={styles.cards}>
          {episodes
            .filter(episode => episode.episode.slice(1, 3) === `0${season}`)
            .map(episode => (
              <EpisodeCard key={episode.id} episode={episode} messages={messages} />
            ))}
        </div>
      )}
      <Pagination />
    </Layout>
  );
};

export default Home;
