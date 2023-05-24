import Link from 'next/link';
import styles from './NavBar.module.css';
import Image from 'next/image';

export const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <Link href='/' passHref>
        <div className={styles.nameImgContainer}>
          <h2>Pókemon</h2>
          <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
            alt='Imagen del bicho'
            width={70}
            height={70}
          />
        </div>
      </Link>
      <Link href='/favorites' passHref>
        Favoritos
      </Link>
    </nav>
  );
};
