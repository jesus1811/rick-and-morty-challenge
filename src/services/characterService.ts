import { Character } from '@/models';
import axios from 'axios';

const getCharactersService = async (setLoader: Function, page: number): Promise<Character[]> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/character?page=${page}`);
    if (response.status === 200) return response.data.results;
    return [];
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    setLoader(false);
  }
};

//post

//put

//delete

export default { getCharactersService };
