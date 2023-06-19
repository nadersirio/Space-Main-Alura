import React from 'react'
import Tags from '../Tags';
import Styles from './gallery.module.scss';
import { photos } from './photos';
import open from '../../assets/open.png';
import favorite from '../../assets/favorito.png';

export default function gallery() {
  return (
    <section className={Styles.gallery}>
      <h2>Navigate the gallery</h2>
      <Tags />
      <ul className={Styles.gallery__cards}>
        {photos.map((photo) => {
          return (
            <li key={photo.id} className={Styles.gallery__card}>
            <img
              className={Styles.gallery__image}
              src={require(`../../assets/imagens/galeria/${photo.image}`)}
              alt={photo.title}
            />
              <p className={Styles.gallery__description}>{photo.title}</p>
              <div>
                <p>{photo.credits}</p>
                <span>
                  <img src={favorite} alt='Like Heart Icon' />
                  <img src={open} alt='Open Modal Icon' />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  )
}
