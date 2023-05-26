import { Layout } from '@/components/layouts';
import { NextPage } from 'next';
import styles from './Favorites.module.css';
import NoFavorites from '@/components/ui/NoFavorites';
import { useEffect, useState } from 'react';
import { localFavorites } from '@/utils';
import FavoritesContainer from '../../components/ui/FavoritesContainer';

const Favorites: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);
  return (
    <Layout title='Favoritos'>
      {!favoritePokemons.length ? (
        <NoFavorites />
      ) : (
        <FavoritesContainer pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
