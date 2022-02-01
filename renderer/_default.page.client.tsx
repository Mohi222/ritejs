import React from 'react';
import ReactDOM from 'react-dom';
import type { PageContext } from 'types';
import { getPage } from 'vite-plugin-ssr/client';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client';
import { PageShell } from './PageShell';
import DefaultLayout from './layouts/DefaultLayout';


const hydrate = async () => {
  const pageContext = await getPage<PageContext & PageContextBuiltInClient>();
  const { Page,
    pageProps } = pageContext;
  const Layout = Page.getLayout || DefaultLayout;

  ReactDOM.hydrate(
    <PageShell Layout={Layout} pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    document.querySelector('#page-view'),
  );
};

void hydrate();
