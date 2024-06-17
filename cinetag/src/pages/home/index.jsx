import Banner from "@/components/banner";
import Card from "@/components/card";
import Title from "@/components/title";
import styles from "./home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/videos")
      .then((r) => r.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
}
