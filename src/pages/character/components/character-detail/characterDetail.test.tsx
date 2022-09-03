import { Character } from '@/models';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetai.tsx', () => {
  test('renders content', () => {
    const character: Character = {
      created: '29/08/2022',
      episode: ['https://', 'https://'],
      gender: 'Female',
      id: 1,
      image: 'https://',
      location: { name: 'neptuno', url: 'https://' },
      name: 'Rick Sanchez',
      origin: { name: 'neptuno', url: 'https://' },
      species: 'human',
      status: 'live',
      type: 'human',
      url: 'https://',
    };
    const component = render(<CharacterDetail character={character} />);
    component.getByText('Female');
    component.getByText('Rick Sanchez');
    component.getByText('neptuno');
  });
});
