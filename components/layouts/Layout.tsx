import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { NavBar } from '../ui';

export const Layout: FC<{ children: ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Joaquín Bustelo' />
        <meta
          name='description'
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
};
