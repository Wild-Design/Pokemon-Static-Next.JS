import { SmallPokemon } from '@/interfaces';
import styles from './PokeCard.module.css';
import { FC } from 'react';
import { useRouter } from 'next/router';
interface Props {
  pokemon: SmallPokemon;
}

const PokeCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const pokeNavigate = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <div onClick={pokeNavigate} className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={pokemon.img} alt={pokemon.name} />
      </div>
      <div className={styles.titles}>
        <span>{`#${pokemon.id}`}</span>
        <h5>{pokemon.name}</h5>
      </div>
    </div>
  );
};

export default PokeCard;
