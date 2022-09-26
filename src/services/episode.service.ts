import { Episode } from "@/models";
import axios from "axios";

const endPointRickAndMorty = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY}/api`;

const getEpisodesService = async (
  setLoader: (isboolean: boolean) => void
): Promise<Episode[]> => {
  try {
    const response = await axios.get(`${endPointRickAndMorty}/episode`);
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

export { getEpisodesService };
