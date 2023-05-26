import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { NavBar } from '../ui';

const origin = typeof window === 'undefined' ? '' : window.location.origin;

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

        <meta property='og:title' content={`Información sobre ${title}`} />
        <meta
          property='og:description'
          content={`Esta es la página sobre ${title}`}
        />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
};
