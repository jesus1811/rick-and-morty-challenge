import React, { useState, useEffect } from "react";
import { Layout, Loading, Title } from "@/components";
import { characterService } from "@/services";
import { useSelector, useDispatch } from "react-redux";
import { readCharacters } from "@/redux/slices/charactersSlice";
import { AppStore } from "@/redux/store";
import { Character } from "@/models";
import { CharacterCard } from "./components";
import styles from "./home.module.scss";
import charactersAdapter from "@/adapters/charactersAdapter";

const Home = () => {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const characters = useSelector((store: AppStore) => store.characters);

  const getCharacters = async () => {
    const results = await characterService.getRickAndMortyCharactersService(setLoader);
    dispatch(readCharacters(charactersAdapter(results)));
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <Layout title="home" description="rick and morty challenge">
      <Title>Rick and Morty</Title>
      <div className={styles.content}>
        {loader ? (
          <Loading />
        ) : (
          characters.map((character: Character, index: number) => (
            <CharacterCard key={index} character={character} />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Home;
