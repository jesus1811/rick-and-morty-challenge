import { Episode } from '@/models';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import EpisodeCard from './EpisodeCard';

describe('EpisodeCard.tsx', () => {
  test('renders content', () => {
    const episode: Episode = {
      id: 1,
      name: 'pilot',
      air_date: 'December 2, 2013',
      characters: [
        'https://rickandmortyapi.com/api/character/1',
        'https://rickandmortyapi.com/api/character/2',
      ],
      url: 'https://rickandmortyapi.com/api/episode/1',
      created: '2017-11-10T12:56:33.798Z',
      episode: 'S01E01',
    };
    const component = render(<EpisodeCard episode={episode} messages={[]} />);
    component.getByText('pilot');
    component.getByText('Episode: 01');
  });
});
