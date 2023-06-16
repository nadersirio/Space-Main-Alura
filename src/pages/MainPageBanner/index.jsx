import React from 'react'
import Styles from './homePage.module.scss'
import MenuPage from '../menuPage'
import banner from '../../assets/banner.png'

export default function MainPageBanner() {
  return (
    <main>
      <section className={Styles.main}>
        <MenuPage />
        <div className={Styles.main__image}>
          <h1>The most complete gallery of space photos</h1>
          <img src={banner} alt="Space Banner" />
        </div>
      </section>
    </main>
  )
}
