import { useState } from 'react';
import { Layout } from '@/components/layouts';
import { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import styles from './[name].module.css';
import { localFavorites, getPokemonInfo } from '@/utils';
import confetti from 'canvas-confetti';

interface Props {
  pokemon: Pokemon;
}

const PokeByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existPokemonInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

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
              <button onClick={onToggleFavorite}>
                {isInFavorites ? 'Quitar de favoritos' : ' Agregar a favoritos'}
              </button>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get(`/pokemon?limit=151`);
  /*En este caso (o sea para buscar pokemons por nombre) tube que hacer una request a la api que trae los 151 pokemons
   y tomar el nombre de cada uno de los objetos que trae el array para pasarselo a la ruta de las props */
  let pokemons151: string[] = [];

  for (let i: number = 0; i < data.results.length; i++) {
    pokemons151.push(data.results[i].name);
  }

  return {
    paths: pokemons151.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokeByNamePage;
