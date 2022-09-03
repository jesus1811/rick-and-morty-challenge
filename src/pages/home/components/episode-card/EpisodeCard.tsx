import React, { useState } from "react";
import { Button, Card, Paragraph, Title } from "@/components";
import { Episode } from "@/models";
import { Modal } from "@mui/material";
import styles from "./episodeCard.module.scss";
import { getURLVideoFirebase } from "@/utilities";

interface Prop {
  episode: Episode;
}

const EpisodeCard = ({ episode }: Prop) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <Card>
        <Paragraph variant="primary" size="small">
          Episode: {episode.episode.slice(4)}
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
          <Title variant="primary">Episode: {episode.episode.slice(4)}</Title>
          <video
            className={styles.video}
            autoPlay
            controls
            src={getURLVideoFirebase(`01x${episode.episode.slice(4)}.mkv`)}
          />
        </div>
      </Modal>
    </>
  );
};

export default EpisodeCard;
