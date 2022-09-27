import React from 'react';
import { Card, Paragraph, Title } from '@/components';
import styles from './characterDetail.module.scss';
import { Character } from '@/models';

const CharacterDetail = ({ character }: { character: Character }) => {
  return (
    <>
      <Card>
        <img className={styles.image} src={character.image} alt={character.name} loading="lazy" />
      </Card>
      <Card>
        <Title primary>{character.name}</Title>
        <div className={styles.informations}>
          <Paragraph primary medium>
            Gender:
            <span className={styles.information}> {character.gender}</span>
          </Paragraph>
          <Paragraph primary medium>
            Create:
            <span className={styles.information}> {character.created.slice(0, 10)}</span>
          </Paragraph>
          <Paragraph primary medium>
            Specie:
            <span className={styles.information}> {character.species}</span>
          </Paragraph>
          <Paragraph primary medium>
            Location:
            <span className={styles.information}> {character.location.name}</span>
          </Paragraph>
          <Paragraph primary medium>
            Origin:
            <span className={styles.information}> earth</span>
          </Paragraph>
          <Paragraph primary medium>
            Type:
            <span className={styles.information}> {character.type}</span>
          </Paragraph>
        </div>
      </Card>
    </>
  );
};

export default CharacterDetail;
