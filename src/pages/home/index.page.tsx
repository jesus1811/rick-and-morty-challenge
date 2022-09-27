import { Layout, Loading, Title } from '@/components';
import { Banner, EpisodeCard, Pagination } from './components';
import styles from './home.module.scss';
import { useCounterSeason } from './hooks';
import useEpisodes from './hooks/useEpisodes.hook';
import useMessages from './hooks/useMessages.hook';

const Home = () => {
  const { counterSeason, handleCounterSeason } = useCounterSeason();
  const { isLoaderEpisodes, episodes } = useEpisodes();
  const { messages } = useMessages();
  return (
    <Layout title="Rickvana | Home" description="Plataforma de rick and morty para ver la serie e informarse">
      <Banner />
      <Title variant="primary">Episodes</Title>
      <Pagination season={counterSeason} setSeason={handleCounterSeason} />
      {isLoaderEpisodes ? (
        <Loading />
      ) : (
        <div className={styles.cards}>
          {episodes
            .filter(episode => episode.episode.slice(1, 3) === `0${counterSeason}`)
            .map(episode => (
              <EpisodeCard key={episode.id} episode={episode} messages={messages} />
            ))}
        </div>
      )}
      <Pagination season={counterSeason} setSeason={handleCounterSeason} />
    </Layout>
  );
};

export default Home;
