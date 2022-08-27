import React, { useEffect, useState } from "react";
import { Button, Layout, Loading, Paragraph, Title } from "@/components";
import { episodeService } from "@/services";
import { Banner, EpisodeCard } from "./components";
import { useSelector, useDispatch } from "react-redux";
import styles from "./home.module.scss";
import { readEpisodes } from "@/redux/slices/episodesSlice";
import { AppStore } from "@/redux/store";
import { episodesAdapter } from "@/adapters";

const Home = () => {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const episodes = useSelector((store: AppStore) => store.episodes);
  const [season, setSeason] = useState(1);

  const getEpisodes = async () => {
    const results = await episodeService.getEpisodesService(setLoader);
    dispatch(readEpisodes(episodesAdapter(results)));
  };
  useEffect(() => {
    getEpisodes();
  }, []);
  return (
    <Layout title="Rickvana | Home" description="tu plataforma de peliculas favorita">
      <Banner />
      <Title variant="primary">Episodes</Title>
      <div className={styles.buttons}>
        <Paragraph size="large" variant="white">
          Season {season}
        </Paragraph>
        <Button variant="primary" onClick={() => setSeason(1)}>
          Season 1
        </Button>
        <Button variant="primary" onClick={() => setSeason(2)}>
          Season 2
        </Button>
        <Button variant="disable" onClick={() => {}}>
          Season 3
        </Button>
      </div>
      {loader ? (
        <Loading />
      ) : (
        <div className={styles.cards}>
          {episodes
            .filter((episode) => episode.episode.slice(1, 3) === `0${season}`)
            .map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
        </div>
      )}

      <div className={styles.buttons}>
        <Paragraph size="large" variant="white">
          Season {season}
        </Paragraph>
        <Button variant="primary" onClick={() => setSeason(1)}>
          Season 1
        </Button>
        <Button variant="primary" onClick={() => setSeason(2)}>
          Season 2
        </Button>
        <Button variant="disable" onClick={() => {}}>
          Season 3
        </Button>
      </div>
    </Layout>
  );
};

export default Home;
