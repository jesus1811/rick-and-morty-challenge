import React, { useState } from 'react';
import { Button, Card, Paragraph, Title } from '@/components';
import { Episode } from '@/models';
import { Modal } from '@mui/material';
import { getURLVideoFirebaseUtility } from '@/utilities';
import styles from './episodeCard.module.scss';

interface Prop {
  episode: Episode;
}

const EpisodeCard = ({ episode }: Prop) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <>
      <Card>
        <Paragraph variant="primary" size="small">
          Episode: {episode.episode.slice(4, 6)}
        </Paragraph>
        <Paragraph size="small" variant="white">
          {episode.name}
        </Paragraph>
        <Button variant="outline" onClick={() => setIsModal(true)}>
          View Episode
        </Button>
      </Card>
      <Modal open={isModal} onClose={() => setIsModal(false)}>
        <div className={styles.modal}>
          <span className={styles.icons}>
            <img
              className={styles.icon}
              src="/close.svg"
              alt="close"
              onClick={() => setIsModal(false)}
            />
          </span>
          <Title variant="primary">
            Episode {episode.episode.slice(4)} - {episode.name}
          </Title>
          <video
            className={styles.video}
            autoPlay
            controls
            src={getURLVideoFirebaseUtility(
              `${episode.episode.slice(1, 3)}x${episode.episode.slice(4)}.mkv`
            )}
          />

          <Paragraph size="large" variant="primary">
            Characters:
          </Paragraph>
          <div className={styles.images}>
            {episode.characters.map((character, index) => (
              <img
                key={index}
                className={styles.image}
                src={`https://rickandmortyapi.com/api/character/avatar/${character.slice(42)}.jpeg`}
                alt=""
              />
            ))}
          </div>
          <Paragraph size="large" variant="primary">
            Created:
          </Paragraph>
          <Paragraph size="small" variant="white">
            {episode.created.slice(0, 10)} {episode.created.slice(11, 19)}
          </Paragraph>
        </div>
      </Modal>
    </>
  );
};

export default EpisodeCard;
