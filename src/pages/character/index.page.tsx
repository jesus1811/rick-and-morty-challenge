import React, { useState, useEffect } from 'react';
import { Layout, Loading, Title } from '@/components';
import { characterService } from '@/services';
import { useSelector, useDispatch } from 'react-redux';
import { readCharacters } from '@/redux/slices/charactersSlice';
import { AppStore } from '@/redux/store';
import { Character } from '@/models';
import { Buttons, CharacterCard } from './components';
import { useCounterPage } from '@/hooks';
import { charactersAdapter } from '@/adapters';
import styles from './character.module.scss';

const Character = () => {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const characters: Character[] = useSelector((store: AppStore) => store.characters);
  const { counterPage, handleCounter } = useCounterPage();

  const getCharacters = async () => {
    const results = await characterService.getCharactersService(setLoader, counterPage);
    dispatch(readCharacters(results.map((result) => charactersAdapter(result))));
  };
  useEffect(() => {
    getCharacters();
  }, [counterPage]);
  return (
    <Layout
      title="Rickvana | Characters"
      description="Plataforma de rick and morty para ver la serie e informarse"
    >
      <Title variant="primary">Characters</Title>
      <Buttons counterPage={counterPage} handleCounter={handleCounter} />
      {loader ? (
        <Loading />
      ) : (
        <div className={styles.cards}>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} page={counterPage} />
          ))}
        </div>
      )}
      <Buttons counterPage={counterPage} handleCounter={handleCounter} />
    </Layout>
  );
};

export default Character;
