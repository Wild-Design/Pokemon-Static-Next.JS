import { FC } from 'react';
import styles from './FavoriteCard.module.css';
import { useRouter } from 'next/router';

interface Props {
  id: number;
}

const FavoriteCard: FC<Props> = ({ id }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <div onClick={onFavoriteClicked} className={styles.cardContainer}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={`${id}`}
      />
    </div>
  );
};

export default FavoriteCard;
