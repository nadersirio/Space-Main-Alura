import Styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={Styles.header}>
<<<<<<< HEAD
<<<<<<< HEAD
      <a href="/"><img src={logo} alt="Logo Alura Space" /></a>
=======
      <img src="/assets/logo.png" alt="Logo Alura Space" />
>>>>>>> parent of b756a64 (att-1.3)
=======
      <img src="/assets/logo.png" alt="Logo Alura Space" />
>>>>>>> parent of b756a64 (att-1.3)
      <div className={Styles.header__container}>
        <input type="text" className={Styles.header__input} placeholder="What are you looking for?" />
        <img src="/assets/search.png" alt="Search Icon" />
      </div>
    </header>
  )
}