import { Layout } from '@/components/layouts';
import { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import styles from './[id].module.css';

interface Props {
  pokemon: Pokemon;
}

const PokePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <div className={styles.pokemonContainer}>
            <img
              src={pokemon.sprites.other?.dream_world.front_default}
              alt={pokemon.name}
            />
          </div>
          <div className={styles.secondContainer}>
            <div className={styles.nameButton}>
              <h3>{pokemon.name}</h3>
              <button>Guardar en favoritos</button>
            </div>
            <div className={styles.spritesContainer}>
              <p>Sprites:</p>
              <div>
                <img src={pokemon.sprites.front_default} alt='Front' />
                <img src={pokemon.sprites.front_shiny} alt='Front Shiny' />
                <img src={pokemon.sprites.back_default} alt='Back' />
                <img src={pokemon.sprites.back_shiny} alt='Back Shiny' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  let pokemons151: string[] = [];
  for (let i: number = 1; i <= 151; i++) {
    pokemons151.push(`${i}`);
  } //pusheo al array 151 numeros desde el 1 hasta el 151 en formato string porque el paths recive un string

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokePage;
