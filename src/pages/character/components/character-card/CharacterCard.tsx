import React from 'react';
import { Button, Card, Paragraph } from '@/components';
import { Character } from '@/models';
import styles from './characterCard.module.scss';
import { useRouter } from 'next/router';

interface Prop {
  character: Character;
  page: number;
}

const CharacterCard = ({ character, page }: Prop) => {
  const router = useRouter();
  return (
    <Card>
      <Paragraph size="small" variant="white">
        <span className={styles.id}>#{character.id} </span>
        {character.name}
      </Paragraph>
      <img className={styles.image} src={character.image} alt={character.name} loading="lazy" />
      <Button
        variant="outline"
        onClick={() => router.push(`./character/${character.id}?page=${page}`)}
      >
        View
      </Button>
    </Card>
  );
};

export default CharacterCard;
