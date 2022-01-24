import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { PageShell } from "./PageShell";
import { PageContext } from "types";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client";
import DefaultLayout from "./layouts/DefaultLayout";

hydrate();

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>();
  const { Page, pageProps } = pageContext;
  const Layout = Page.getLayout || DefaultLayout;

  ReactDOM.hydrate(
    <PageShell pageContext={pageContext} Layout={Layout}>
      <Page {...pageProps} />
    </PageShell>,
    document.getElementById("page-view")
  );
}
