import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement,
  ReactNode } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

// eslint-disable-next-line import/no-unassigned-import
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode,
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
};

const MyApp = ({ Component,
  pageProps }: AppPropsWithLayout) => {


  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => {
    return <DefaultLayout>{page}</DefaultLayout>
    ;
  });
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
