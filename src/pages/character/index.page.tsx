import { Layout, Loading, Pagination, Title } from '@/components';
import { useCounterPage } from '@/hooks';
import { CharacterCard } from './components';
import { useCharacters } from './hooks';
import styles from './character.module.scss';

const Character = () => {
  const { counterPage, handleCounterNext, handleCounterPrev } = useCounterPage();
  const { characters, isLoader } = useCharacters(counterPage);
  return (
    <Layout
      title="Rickvana | Characters"
      description="Plataforma de rick and morty para ver la serie e informarse"
    >
      <Title variant="primary">Characters</Title>
      <Pagination
        counterPage={counterPage}
        handleCounterNext={handleCounterNext}
        handleCounterPrev={handleCounterPrev}
      />
      {isLoader ? (
        <Loading />
      ) : (
        <div className={styles.characterCards}>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} page={counterPage} />
          ))}
        </div>
      )}
      <Pagination
        counterPage={counterPage}
        handleCounterNext={handleCounterNext}
        handleCounterPrev={handleCounterPrev}
      />
    </Layout>
  );
};

export default Character;
