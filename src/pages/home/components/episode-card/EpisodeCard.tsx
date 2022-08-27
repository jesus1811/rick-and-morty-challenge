import React from "react";
import { Button, Card, Paragraph } from "@/components";
import { Episode } from "@/models";
import styles from "./episodeCard.module.scss";

interface Prop {
  episode: Episode;
}

const EpisodeCard = ({ episode }: Prop) => {
  return (
    <Card>
      <Paragraph variant="primary" size="small">
        Episode: {episode.episode.slice(4)}
      </Paragraph>
      <Paragraph size="small" variant="white">
        {episode.name}
      </Paragraph>
      <Button variant="outline" onClick={() => {}}>
        View Episode
      </Button>
    </Card>
  );
};

export default EpisodeCard;
