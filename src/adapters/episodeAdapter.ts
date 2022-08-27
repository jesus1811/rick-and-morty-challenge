import { Episode } from "@/models";

const episodesAdapter = (episodes: Episode[]) => {
  return episodes.map(
    (episode) =>
      <Episode>{
        id: episode.id,
        air_date: episode.air_date,
        characters: episode.characters,
        created: episode.created,
        episode: episode.episode,
        name: episode.name,
        url: episode.url,
      }
  );
};

export default episodesAdapter;
