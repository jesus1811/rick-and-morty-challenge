import { Button, Card, Paragraph } from '@/components';
import { Location } from '@/models';
import React from 'react';
import styles from './locationCard.module.scss';

interface Prop {
  location: Location;
}

const LocationCard = ({ location }: Prop) => {
  return (
    <Card>
      <Paragraph variant="primary" size="small">
        Location #{location.id}
      </Paragraph>
      <Paragraph size="small" variant="white">
        {location.name}
      </Paragraph>
      <Button variant="outline" onClick={() => {}}>
        View Location
      </Button>
    </Card>
  );
};

export default LocationCard;
