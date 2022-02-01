import React from 'react';
import type { PageContext } from 'types';
import { PageContextProvider } from './usePageContext';
// eslint-disable-next-line import/no-unassigned-import
import './global.css';

export { PageShell };

const PageShell = ({
  children,
  pageContext,
  Layout,
}: {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Layout: ({ children }: { children: React.ReactNode, }) => JSX.Element,
  children: React.ReactNode,
  pageContext: PageContext,
}) => {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>{children}</Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
};
