import { Paragraph, Title } from '@/components';
import React from 'react';
import styles from './banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title variant="primary">Rick and Morty</Title>
        <Paragraph size="medium" variant="white">
          Después de haber estado desaparecido durante casi 20 años, Rick Sánchez llega de
          imprevisto a la puerta de la casa de su hija Beth y se va a vivir con ella y su familia
          utilizando el garaje como su laboratorio personal.
        </Paragraph>
      </div>
    </div>
  );
};

export default Banner;
