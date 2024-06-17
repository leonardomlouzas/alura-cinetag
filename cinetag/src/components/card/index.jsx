import styles from "./card.module.css";
import iconNotFavorite from "/favorite_outline.png";
import iconFavorite from "/favorite.png";
import { useFavoriteContext } from "@/contexts/favorites";
import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = isFavorite ? iconFavorite : iconNotFavorite;

  return (
    <div className={styles.container} id={id}>
      <Link to={`/${id}`} className={styles.link}>
        <img src={cover} alt={title} className={styles.cover} />
        <h2>{title}</h2>
      </Link>
      <img
        src={icon}
        alt="Favorite movie"
        className={styles.favorite}
        onClick={() => {
          addFavorite(id, title, cover);
        }}
      />
    </div>
  );
}
