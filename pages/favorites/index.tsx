import { Layout } from '@/components/layouts';
import { NextPage } from 'next';
import styles from './Favorites.module.css'

const Favorites: NextPage = () => {
  return (
    <Layout title='Favoritos'>
      <p>Favoritos</p>
    </Layout>
  );
};

export default Favorites;
