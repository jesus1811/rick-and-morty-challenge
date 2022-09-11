import { Button, Input, Paragraph, Title } from '@/components';
import { Modal as ModalMUI } from '@mui/material';
import styles from './modal.module.scss';
import { Episode, Message } from '@/models';
import { getCurrentDate, getCurrentTime, getURLVideoFirebaseUtility } from '@/utilities';
import { useField } from '@/hooks';
import io from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_SOCKET_CHAT!);

interface Prop {
  episode: Episode;
  messages: Message[];
  setIsModal: Function;
  isModal: boolean;
}

const Modal = ({ episode, messages, setIsModal, isModal }: Prop) => {
  const textMessage = useField('');

  const handleCreateMessage = () => {
    socket.emit('message', {
      datemessage: getCurrentDate(),
      hourmessage: getCurrentTime(),
      iduser: 'demo', //🚧🚧 en progreso... 🚧🚧
      textmessage: textMessage.value,
      idroom: episode.id,
    });
    textMessage.handleReset();
  };
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
          <div className={styles.message}>
            <Input {...textMessage} placeholder="Comenta aqui" value={textMessage.value} />
            <Button onClick={handleCreateMessage} variant="outline">
              Send comment
            </Button>
          </div>
          {messages
            .filter((message) => message.idroom === episode.id)
            .reverse()
            .map((message) => (
              <>
                <div key={message.idmessage} className={styles.row}>
                  <img
                    className={styles.image}
                    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                    alt=""
                  />
                  <Paragraph size="medium" variant="primary">
                    {message.nameuser}
                  </Paragraph>
                  <Paragraph size="small" variant="white">
                    {message.datemessage.slice(0, 10)}
                  </Paragraph>
                  <Paragraph size="small" variant="white">
                    {message.hourmessage.slice(0, 5)}
                  </Paragraph>
                </div>
                <div key={message.idmessage} className={styles.message}>
                  <Paragraph size="small" variant="white">
                    {message.textmessage}
                  </Paragraph>
                </div>
              </>
            ))}
        </div>
      </div>
    </ModalMUI>
  );
};

export default Modal;
