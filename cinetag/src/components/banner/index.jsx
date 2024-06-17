import styles from "./banner.module.css";

export default function Banner({ image }) {
  return (
    <div
      className={styles.cover}
      style={{ backgroundImage: `url(/banner-${image}.png)` }}
    ></div>
  );
}
