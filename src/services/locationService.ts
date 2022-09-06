import { Location } from '@/models';
import axios from 'axios';

const getLocationsService = async (
  setLoader: (isboolean: boolean) => void
): Promise<Location[]> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/location`);
    if (response.status === 200) return response.data.results;
    return [];
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    setLoader(false);
  }
};
export default { getLocationsService };
