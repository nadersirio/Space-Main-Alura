import Styles from "./header.module.scss";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <header className={Styles.header}>
      <a href="/"><img src={logo} alt="Logo Alura Space" /></a>
      <div className={Styles.header__container}>
        <input type="text" className={Styles.header__input} placeholder="What are you looking for?" />
        <img src="/assets/search.png" alt="Search Icon" />
      </div>
    </header>
  )
}
