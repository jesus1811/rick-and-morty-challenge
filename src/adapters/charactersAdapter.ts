import { Character } from "@/models";

const charactersAdapter = (characters: any) => {
  return characters.map((character: Character) => {
    return {
      created: character.created,
      episode: character.episode,
      gender: character.gender,
      id: character.id,
      image: character.image,
      location: character.location,
      name: character.name,
      origin: character.origin,
      species: character.species,
      status: character.status,
      type: character.type,
      url: character.url,
    };
  });
};

export default charactersAdapter;
