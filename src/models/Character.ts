export interface Location {
  name: string;
  url: string;
}

export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number | null;
  image: string;
  location: Location;
  name: string;
  origin: Location;
  species: string;
  status: string;
  type: string;
  url: string;
}
