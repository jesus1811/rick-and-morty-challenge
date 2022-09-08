import React, { useState } from 'react';
import { Button, Card, Loading, Paragraph } from '@/components';
import { Character } from '@/models';
import styles from './characterCard.module.scss';
import { useRouter } from 'next/router';

interface Prop {
  character: Character;
  page: number;
}

const CharacterCard = ({ character, page }: Prop) => {
  const router = useRouter();
  const [isLoader, setIsloader] = useState<boolean>(true);
  return (
    <Card>
      <Paragraph size="small" variant="white">
        <span className={styles.id}>#{character.id} </span>
        {character.name}
      </Paragraph>
      {isLoader && <Loading />}
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`${styles.image} ${isLoader && styles.disable}`}
        src={character.image}
        alt={character.name}
        loading="lazy"
        onLoad={() => setIsloader(false)}
      />
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
