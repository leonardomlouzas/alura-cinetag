import styles from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import HeaderLink from "../headerLink";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo do cinetag" />
      </Link>
      <nav>
        <HeaderLink url="/">Início</HeaderLink>
        <HeaderLink url="/favorites">Favoritos</HeaderLink>
      </nav>
    </header>
  );
}
