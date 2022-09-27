import { Layout, Loading, Title } from '@/components';
import { useRouter } from 'next/router';
import { CharacterDetail } from './components';
import { useCharacters } from './hooks';
import styles from './detail.module.scss';

const Detail = () => {
  const router = useRouter();
  const { characters, isLoader } = useCharacters(Number(router.query.page));

  return (
    <Layout title="detail" description="description test">
      <Title primary>Detail</Title>
      <div className={styles.characterDetails}>
        {isLoader ? (
          <Loading />
        ) : (
          characters
            .filter(character => character.id === Number(router.query.id))
            .map(character => <CharacterDetail key={character.id} character={character} />)
        )}
      </div>
    </Layout>
  );
};

export default Detail;
