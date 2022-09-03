import { Character } from '@/models';

const charactersAdapter = (character: Character) => ({
  created: character.created,
  episode: character.episode,
  gender: character.gender,
  id: character.id,
  image: character.image,
  location: { url: character.location.url, name: character.location.name },
  name: character.name,
  origin: { name: character.origin.name, url: character.origin.url },
  species: character.species,
  status: character.status,
  type: character.type,
  url: character.url,
});
export default charactersAdapter;
