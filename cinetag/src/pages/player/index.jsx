import styles from "./player.module.css";
import Banner from "@/components/banner";
import Title from "@/components/title";
import { useParams } from "react-router-dom";
import NotFound from "../notFound";
import { useEffect, useState } from "react";

export default function Player() {
  const [video, setVideo] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/videos/${params.id}`)
      .then((r) => r.json())
      .then((data) => setVideo(data));
  }, []);

  if (!video) {
    return <NotFound />;
  }
  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
