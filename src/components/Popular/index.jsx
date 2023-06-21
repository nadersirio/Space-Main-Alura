import React from 'react';
import PopularPhotos from './popular-photos.json';
import Styles from './Popular.module.scss';

export default function Popular() {
  return (
    <asides className={Styles.popular}>
      <h2>Most Populars</h2>
      <ul className={Styles.popular__image}>
        {PopularPhotos.map((photo) => {
          return (
            <li key={photo.id}><img src={require(`../../assets/imagens/populares/${photo.path}`)} alt={photo.alt} /></li>
          )
        })}
      </ul>
      <button>See More</button>
    </asides>
  )
}
