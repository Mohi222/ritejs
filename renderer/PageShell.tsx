import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "types";
import "./global.scss";

export { PageShell };

function PageShell({
  children,
  pageContext,
  Layout,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
  Layout: ({ children }: { children: React.ReactNode }) => JSX.Element;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>{children}</Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}
