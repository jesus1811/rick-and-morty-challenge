import React from "react";
import { Card, Paragraph, Title } from "@/components";
import styles from "./characterDetail.module.scss";
import { Character } from "@/models";

const CharacterDetail = ({ character }: { character: Character }) => {
  return (
    <>
      <Card>
        <img className={styles.image} src={character.image} alt={character.name} />
      </Card>
      <Card>
        <Title variant="primary">{character.name}</Title>
        <div className={styles.informations}>
          <Paragraph variant="primary" size="large">
            Gender
            <span className={styles.information}> {character.gender}</span>
          </Paragraph>
          <Paragraph variant="primary" size="large">
            Create
            <span className={styles.information}> {character.created}</span>
          </Paragraph>
          <Paragraph variant="primary" size="large">
            Specie
            <span className={styles.information}> {character.species}</span>
          </Paragraph>
          <Paragraph variant="primary" size="large">
            Location
            <span className={styles.information}> {character.location.name}</span>
          </Paragraph>
          <Paragraph variant="primary" size="large">
            Origin
            <span className={styles.information}> {character.origin.name}</span>
          </Paragraph>
          <Paragraph variant="primary" size="large">
            Type
            <span className={styles.information}> {character.type}</span>
          </Paragraph>
        </div>
      </Card>
    </>
  );
};

export default CharacterDetail;
