import React from 'react';
import Styles from './Tags.module.scss';

export default function Tags() {
  return (
    <div className={Styles.tags}>
      <p className={Styles.tags__p}>Filtre por tags:</p>
      <ul className={Styles.tags__lista}>
        <li className={Styles.tags__li}>Estrelas</li>
        <li className={Styles.tags__li}>Galaxias</li>
        <li className={Styles.tags__li}>Lua</li>
        <li className={Styles.tags__li}>Planetas</li>
      </ul>
    </div>
  )
}
