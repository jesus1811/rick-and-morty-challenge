import React, { useState, useEffect } from "react";
import { Button, Layout, Loading, Paragraph, Title } from "@/components";
import { characterService } from "@/services";
import { useSelector, useDispatch } from "react-redux";
import { readCharacters } from "@/redux/slices/charactersSlice";
import { AppStore } from "@/redux/store";
import { Character } from "@/models";
import { CharacterCard } from "./components";
import styles from "./character.module.scss";
import charactersAdapter from "@/adapters/charactersAdapter";
import { useCounterPage } from "@/hooks";

const Character = () => {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const characters: Character[] = useSelector((store: AppStore) => store.characters);
  const { counterPage, handleCounter } = useCounterPage();

  const getCharacters = async () => {
    const results = await characterService.getCharactersService(setLoader, counterPage);
    dispatch(readCharacters(charactersAdapter(results)));
  };
  useEffect(() => {
    getCharacters();
  }, [counterPage]);
  return (
    <Layout title="Rickvana | Character" description="plataforma para ver e informarse de rick and morty">
      <Title variant="primary">Characters</Title>
      <div className={styles.buttons}>
        <Paragraph size="large" variant="white">
          #Page {counterPage}
        </Paragraph>
        <Button variant="primary" onClick={() => handleCounter("back")}>
          Back
        </Button>
        <Button variant="primary" onClick={() => handleCounter("next")}>
          Next
        </Button>
      </div>
      <div className={styles.cards}>
        {loader ? (
          <Loading />
        ) : (
          characters.map((character, index: number) => (
            <CharacterCard key={index} character={character} />
          ))
        )}
      </div>
      <div className={styles.buttons}>
        <Paragraph size="large" variant="white">
          #Page {counterPage}
        </Paragraph>
        <Button variant="primary" onClick={() => handleCounter("back")}>
          Back
        </Button>
        <Button variant="primary" onClick={() => handleCounter("next")}>
          Next
        </Button>
      </div>
    </Layout>
  );
};

export default Character;
