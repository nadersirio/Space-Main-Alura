import React from 'react'
import Styles from "./menuPage.module.scss";
import home from "../../assets/icones/home-ativo.png";
import likes from "../../assets/icones/mais-curtidas-inativo.png";
import views from "../../assets/icones/mais-vistas-inativo.png";
import news from "../../assets/icones/novas-inativo.png";
import surprise from "../../assets/icones/surpreenda-me-inativo.png";

export default function MenuPage() {
  return (
    <nav className={Styles.menu}>
      <ul className={Styles.menu__lista}>
        <li className={Styles.menu__item}>
          <img src={home} alt="Home Page" />
          <a href="/">Home</a>
        </li>
        <li className={Styles.menu__item}>
          <img src={likes} alt="Most Seen Page" />
          <a href="/">Most Seen</a>
        </li>
        <li className={Styles.menu__item}>
          <img src={views} alt="Most Likeds Page" />
          <a href="/">Most Likeds</a>
        </li>
        <li className={Styles.menu__item}>
          <img src={news} alt="News Page" />
          <a href="/">News</a>
        </li>
        <li className={Styles.menu__item}>
          <img src={surprise} alt="Surprise images Page" />
          <a href="/">Surprise me</a>
        </li>
      </ul>
    </nav>
  )
}
