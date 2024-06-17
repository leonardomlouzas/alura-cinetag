import styles from "./favorites.module.css";
import Banner from "@/components/banner";
import Title from "@/components/title";
import Card from "@/components/card";
import { useFavoriteContext } from "@/contexts/favorites";

export default function Favorites() {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Banner image="favoritos" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </section>
    </>
  );
}
