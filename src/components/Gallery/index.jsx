import React from 'react'
import Tags from '../Tags';
import Styles from './gallery.module.scss';
import { photos } from './photos';
import Cards from './Cards';

export default function gallery() {
  return (
    <section className={Styles.gallery}>
      <h2>Navigate the gallery</h2>
      <Tags />
      <Cards photos={photos} styles={Styles}/>
    </section>
  )
}
