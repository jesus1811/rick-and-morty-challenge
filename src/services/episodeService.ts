import { Episode } from "@/models";
import axios from "axios";

const getEpisodesService = async (setLoader: Function) => {
  try {
    const response = await axios.get<{ results: Episode }>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/espisode`
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

export default { getEpisodesService };
