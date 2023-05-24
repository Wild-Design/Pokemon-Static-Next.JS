import styles from './NavBar.module.css';
import Image from 'next/image';

export const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <span>Pókemon</span>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png'
        alt='Imagen del bicho'
        width={70}
        height={70}
      />
    </div>
  );
};
