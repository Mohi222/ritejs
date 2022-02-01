// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vite-plugin-ssr.com/pageContext-anywhere

import React, { useContext } from 'react';
import type { PageContext } from 'types';

export { PageContextProvider };
export { usePageContext };

const Context = React.createContext<PageContext>(undefined as unknown as PageContext);

const PageContextProvider = ({
  pageContext,
  children,
}: {
  children: React.ReactNode,
  pageContext: PageContext,
}) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};
