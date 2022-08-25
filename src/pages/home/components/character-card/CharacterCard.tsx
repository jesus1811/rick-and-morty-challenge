import React from "react";
import { Card, Paragraph } from "@/components";
import { Character } from "@/models";
import styles from "./characterCard.module.scss";

interface Prop {
  character: Character;
}

const CharacterCard = ({ character }: Prop) => {
  return (
    <Card>
      <Paragraph variant="text__small">
        <span className={styles.id}>#{character.id} </span>
        {character.name}
      </Paragraph>
      <img className={styles.image} src={character.image} alt={character.name} />
    </Card>
  );
};

export default CharacterCard;
