import { FC } from 'react';
import PokeCard from '../PokeCard/PokeCard';
import { SmallPokemon } from '../../../interfaces';
import styles from './PokeCards.module.css';

interface Props {
  pokemons: SmallPokemon[];
}
const PokeCards: FC<Props> = ({ pokemons }) => {
  return (
    <div className={styles.cardsContainer}>
      {pokemons?.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokeCards;
