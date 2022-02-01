import React from 'react';
import { usePageContext } from '../usePageContext';

export { Link };

const Link = (props: {
  children: React.ReactNode,
  className?: string,
  href?: string,
}) => {
  const { href,
    children,
    ...rest } = props;
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === href && 'is-active',
  ]
    .filter(Boolean)
    .join(' ');

  return <a {...rest} className={className} href={href}>{children}</a>;
};
