import React from "react";
import { Button, Card, Paragraph } from "@/components";
import { Character } from "@/models";
import styles from "./characterCard.module.scss";

interface Prop {
  character: Character;
}

const CharacterCard = ({ character }: Prop) => {
  return (
    <Card>
      <Paragraph size="small" variant="white">
        <span className={styles.id}>#{character.id} </span>
        {character.name}
      </Paragraph>
      <img className={styles.image} src={character.image} alt={character.name} />
      <Button variant="outline" onClick={() => {}}>
        View
      </Button>
    </Card>
  );
};

export default CharacterCard;
