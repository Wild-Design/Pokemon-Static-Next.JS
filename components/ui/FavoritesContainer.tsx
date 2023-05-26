import { FC } from 'react';
import FavoriteCard from './FavoriteCard';
import styles from './FavoritesContainer.module.css';

interface Props {
  pokemons: number[];
}

const FavoritesContainer: FC<Props> = ({ pokemons }) => {
  return (
    <div className={styles.container}>
      <div>
        {pokemons.map((id: number) => (
          <FavoriteCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesContainer;
