import { Location } from "@/models";
import axios from "axios";

const endPointRickAndMorty = `${process.env.NEXT_PUBLIC_RICK_AND_MORTY}/api`;

const getLocationsService = async (
  setLoader: Function,
  page: number
): Promise<Location[]> => {
  try {
    const response = await axios.get(
      `${endPointRickAndMorty}/location?page=${page}`
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
export { getLocationsService };
