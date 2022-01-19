import type { NextPage } from 'next';
import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import type { ReactElement,
  ReactNode } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

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
    return <NextIntlProvider messages={pageProps.messages}>
      <DefaultLayout>{page}</DefaultLayout>
    </NextIntlProvider>;
  });
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
