import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import PokeCards from '@/components/pokemon/PokeCards/PokeCards';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';

interface Props {
  pokemons: SmallPokemon[];
}
const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Joaquín'>
      <PokeCards pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: { pokemons },
  };
};

export default HomePage;
