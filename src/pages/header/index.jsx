import Styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={Styles.header}>
      <img src="/assets/logo.png" alt="Logo Alura Space" />
      <div className={Styles.header__container}>
        <input type="text" className={Styles.header__input} placeholder="What are you looking for?" />
        <img src="/assets/search.png" alt="Search Icon" />
      </div>
    </header>
  )
}