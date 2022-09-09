import { Card, Input, Paragraph, Title } from '@/components';
import React, { useState } from 'react';
import { Modal as ModalMUI } from '@mui/material';
import styles from './modal.module.scss';
import { Episode, Message } from '@/models';
import { getURLVideoFirebaseUtility } from '@/utilities';

interface Prop {
  episode: Episode;
  messages: Message[];
  setIsModal: Function;
  isModal: boolean;
}

const Modal = ({ episode, messages, setIsModal, isModal }: Prop) => {
  return (
    <ModalMUI open={isModal} onClose={() => setIsModal(false)}>
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
          Comentarios ( en mantenimiento..... 🚧🚧🚧):
        </Paragraph>
        <div className={styles.comments}>
          {messages
            .filter((message) => message.idroom === episode.id)
            .map((message) => (
              <>
                <div key={message.idmessage} className={styles.row}>
                  <img
                    className={styles.image}
                    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                    alt=""
                  />
                  <Paragraph size="medium" variant="primary">
                    Jesus Ayarza
                  </Paragraph>
                  <Paragraph size="small" variant="white">
                    2022/09/08
                  </Paragraph>
                </div>
                <div key={message.idmessage} className={styles.message}>
                  <Paragraph size="small" variant="white">
                    Buen Episodio
                  </Paragraph>
                </div>
              </>
            ))}
          <div className={styles.message}>
            <Input onChange={() => {}} placeholder="Comenta aqui" />
          </div>
        </div>
      </div>
    </ModalMUI>
  );
};

export default Modal;
