import { NextPage } from 'next';
import styles from './NoFavorites.module.css';

const NoFavorites: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>No hay favoritos</h2>
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg'
          alt='Hiden Mewtwo'
        />
      </div>
    </div>
  );
};

export default NoFavorites;
