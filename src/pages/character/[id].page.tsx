import React, { useEffect, useState } from 'react';
import { Layout, Loading, Title } from '@/components';
import { useRouter } from 'next/router';
import styles from './character.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { characterService } from '@/services';
import { CharacterDetail } from './components';
import { charactersAdapter } from '@/adapters';
import { charactersSlice } from '@/redux/slices';

const Detail = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const characters = useSelector((store: AppStore) => store.characters);
  const dispatch = useDispatch();
  const getCharacters = async () => {
    const results = await characterService.getCharactersService(
      setLoader,
      Number(router.query.page)
    );
    dispatch(charactersSlice.readCharacters(results.map((result) => charactersAdapter(result))));
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <Layout title="detail" description="description test">
      <Title variant="primary">Detail</Title>
      <div className={styles.details}>
        {loader ? (
          <Loading />
        ) : (
          characters
            .filter((character) => character.id === Number(router.query.id))
            .map((character) => <CharacterDetail key={character.id} character={character} />)
        )}
      </div>
    </Layout>
  );
};

export default Detail;
