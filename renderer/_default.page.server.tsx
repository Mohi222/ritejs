import ReactDOMServer from "react-dom/server";
import React from "react";
import { PageShell } from "./PageShell";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { PageContext } from "types";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
import DefaultLayout from "./layouts/DefaultLayout";
import { createStylesServer, ServerStyles } from "@mantine/ssr";
import Html from "./Html";
export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

const stylesServer = createStylesServer();
async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext;
  const Layout = Page.getLayout || DefaultLayout;
  const pageContent = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext} Layout={Layout}>
      <Page {...pageProps} />
    </PageShell>
  );

  const styles = ReactDOMServer.renderToString(
    <ServerStyles html={pageContent} server={stylesServer} />
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || "Rite";
  const desc =
    (documentProps && documentProps.description) ||
    "An opinionated React starter kit";

  const pageHtml = ReactDOMServer.renderToStaticMarkup(
    <Html
      title={title}
      desc={desc}
      styles={<ServerStyles html={pageContent} server={stylesServer} />}
    >
      {pageContent}
    </Html>
  );

  const documentHtml = escapeInject`<!DOCTYPE html>\n${dangerouslySkipEscape(
    pageHtml
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
}
