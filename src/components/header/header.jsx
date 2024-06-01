import { NavLink } from "react-router-dom";

import styles from './header.module.css'

export const Header = () => (
  <header className={styles.header}>
    <ul >
      <li>
        <NavLink to="/">Главная</NavLink>
      </li>
    </ul>
  </header>
);
