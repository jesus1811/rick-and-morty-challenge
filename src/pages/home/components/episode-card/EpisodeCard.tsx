import React, { useState } from 'react';
import { Button, Card, Paragraph } from '@/components';
import { Episode, Message } from '@/models';
import Modal from '../modal/Modal';

interface Prop {
  episode: Episode;
  messages: Message[];
}

const EpisodeCard = ({ episode, messages }: Prop) => {
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
      <Modal isModal={isModal} setIsModal={setIsModal} episode={episode} messages={messages} />
    </>
  );
};

export default EpisodeCard;
