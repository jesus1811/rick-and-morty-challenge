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
      <img className={styles.image} src={character.image} alt={character.name} />
      <Paragraph variant="text__small">{character.name}</Paragraph>
    </Card>
  );
};

export default CharacterCard;
