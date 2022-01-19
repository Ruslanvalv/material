import React from 'react';
import styles from './PokemonInfo.module.css';
function PokemonInfo({ pokemon }) {
  return (
    <div className={styles.PokemonInfo}>
      <div className={styles.Container}>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon img" />
        <ul>
          <li>Снялся в {pokemon.moves.length} сериях </li>
          <li>Id: {pokemon.id} </li>
          <li>height: {pokemon.height} </li>
          <li>attack: {pokemon.stats[1].base_stat} </li>
        </ul>
      </div>
    </div>
  );
}

export default PokemonInfo;
