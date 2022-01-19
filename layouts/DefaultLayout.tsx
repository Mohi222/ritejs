import {MantineProvider } from '@mantine/core';
import Head from 'next/head';
import type { ReactNode } from 'react';

const DefaultLayout = ({children}: {children: ReactNode, }) => {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        name="viewport"
      />
      <meta content="Description" name="description" />
      <meta content="Keywords" name="keywords" />
      <title>Rite</title>
      <link href="/manifest.json" rel="manifest" />
      <meta content="#317EFB" name="theme-color" />
    </Head>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>

  </>;
};

export default DefaultLayout;
