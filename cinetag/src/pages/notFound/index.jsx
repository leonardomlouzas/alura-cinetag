import styles from "./notFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <h2>Ops!</h2>
      <p>Página não encontrada</p>
    </section>
  );
}
