import { createStylesServer,
  ServerStyles } from '@mantine/ssr';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import type { PageContext } from 'types';
import { escapeInject,
  dangerouslySkipEscape } from 'vite-plugin-ssr';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';
import Html from './Html';
import { PageShell } from './PageShell';
import DefaultLayout from './layouts/DefaultLayout';

export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

const stylesServer = createStylesServer();
const render = async (pageContext: PageContext & PageContextBuiltIn) => {
  const { Page,
    pageProps } = pageContext;
  const Layout = Page.getLayout || DefaultLayout;
  const pageContent = ReactDOMServer.renderToString(
    <PageShell Layout={Layout} pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext;
  const title = (documentProps?.title) ?? 'Rite';
  const desc =
    (documentProps?.description) ??
    'An opinionated React starter kit';

  const pageHtml = ReactDOMServer.renderToStaticMarkup(
    <Html
      desc={desc}
      styles={<ServerStyles html={pageContent} server={stylesServer} />}
      title={title}
    >
      {pageContent}
    </Html>,
  );

  const documentHtml = escapeInject`<!DOCTYPE html>\n${dangerouslySkipEscape(
    pageHtml,
  )}`;

  // const documentHtml = escapeInject`<!DOCTYPE html>
  //   <html lang="en">
  //     <head>
  //       <meta charset="UTF-8" />
  //       <link rel="icon" href="/favicon.svg" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //       <meta name="description" content="${desc}" />
  //       <title>${title}</title>
  //       ${styles}
  //     </head>
  //     <body>
  //       <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
  //     </body>
  //   </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
};
