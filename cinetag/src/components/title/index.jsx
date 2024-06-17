import styles from "./title.module.css";

export default function Title({ children }) {
  return <div className={styles.text}>{children}</div>;
}
