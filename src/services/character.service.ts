import { Character } from "@/models";
import axios from "axios";

const endPointRickAndMorty = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY}/api`;

const getCharactersService = async (
  setLoader: Function,
  page: number
): Promise<Character[]> => {
  try {
    const response = await axios.get(
      `${endPointRickAndMorty}/character?page=${page}`
    );
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

export { getCharactersService };
