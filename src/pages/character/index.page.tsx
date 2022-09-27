import { Layout, Loading, Pagination, Title } from '@/components';
import { CharacterCard } from './components';
import { useCharacters } from './hooks';
import styles from './character.module.scss';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

const Character = () => {
  const page = useSelector((store: AppStore) => store.page);
  const { characters, isLoader } = useCharacters(page);
  return (
    <Layout title="Rickvana | Characters" description="Plataforma de rick and morty para ver la serie e informarse">
      <Title variant="primary">Characters</Title>
      <Pagination />
      {isLoader ? (
        <Loading />
      ) : (
        <div className={styles.characterCards}>
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} page={page} />
          ))}
        </div>
      )}
      <Pagination />
    </Layout>
  );
};

export default Character;
