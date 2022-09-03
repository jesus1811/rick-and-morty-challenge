import { Character } from '@/models';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CharacterCard from './CharacterCard';

describe('CharacterCard.tsx', () => {
  test('renders content', () => {
    const character: Character = {
      created: '2017-11-05T10:13:45.960Z',
      episode: ['https://rickandmortyapi.com/api/episode/5'],
      gender: 'Female',
      id: 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/41.jpeg',
      location: {
        name: 'Fantasy World',
        url: 'https://rickandmortyapi.com/api/location/48',
      },
      name: 'Big Boobed Waitress',
      origin: {
        name: 'Fantasy World',
        url: 'https://rickandmortyapi.com/api/location/48',
      },
      status: 'Alive',
      type: '',
      url: 'https://rickandmortyapi.com/api/character/41',
      species: 'Mythological Creature',
    };
    const component = render(<CharacterCard character={character} page={1} />);
    component.getByText('Big Boobed Waitress');
    component.getByText('#1');
  });
});
