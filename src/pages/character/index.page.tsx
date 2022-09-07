import React, { useState, useEffect } from 'react';
import { Layout, Loading, Pagination, Title } from '@/components';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '@/redux/store';
import { Character } from '@/models';
import { CharacterCard } from './components';
import { useCounterPage } from '@/hooks';
import { charactersAdapter } from '@/adapters';
import styles from './character.module.scss';
import { readCharacters } from '@/redux/slices';
import { getCharactersService } from '@/services';

const Character = () => {
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const dispatch = useDispatch();
  const characters: Character[] = useSelector((store: AppStore) => store.characters);
  const { counterPage, handleCounterNext, handleCounterPrev } = useCounterPage(setIsLoader);

  useEffect(() => {
    const getCharacters = async () => {
      const results = await getCharactersService(setIsLoader, counterPage);
      dispatch(readCharacters(results.map((result) => charactersAdapter(result))));
    };
    getCharacters();
  }, [counterPage, dispatch]);

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
        <div className={styles.cards}>
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
