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
        <Title variant="primary">{character.name}</Title>
        <div className={styles.informations}>
          <Paragraph primary large>
            Gender:
            <span className={styles.information}> {character.gender}</span>
          </Paragraph>
          <Paragraph primary large>
            Create:
            <span className={styles.information}> {character.created.slice(0, 10)}</span>
          </Paragraph>
          <Paragraph primary large>
            Specie:
            <span className={styles.information}> {character.species}</span>
          </Paragraph>
          <Paragraph primary large>
            Location:
            <span className={styles.information}> {character.location.name}</span>
          </Paragraph>
          <Paragraph primary large>
            Origin:
            <span className={styles.information}> earth</span>
          </Paragraph>
          <Paragraph primary large>
            Type:
            <span className={styles.information}> {character.type}</span>
          </Paragraph>
        </div>
      </Card>
    </>
  );
};

export default CharacterDetail;
