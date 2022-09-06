import { Location } from '@/models';

const locationAdapter = (location: Location) => {
  return {
    id: location.id,
    created: location.created,
    dimension: location.dimension,
    name: location.name,
    residents: location.residents,
    type: location.type,
    url: location.url,
  };
};

export default locationAdapter;
