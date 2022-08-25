import { Character } from "@/models";
import axios from "axios";

const getRickAndMortyCharactersService = async (setLoader: Function) => {
  try {
    const response = await axios.get<{ results: Character }>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/character`
    );
    if (response.status === 200) return response.data.results;
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

export default { getRickAndMortyCharactersService };
