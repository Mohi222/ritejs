/* eslint-disable react/no-danger */
import React from 'react';

const Html = ({
  children,
  title,
  desc,
  styles,
}: {
  children: string,
  desc: string,
  styles: JSX.Element,
  title: string,
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link href="/favicon.svg" rel="icon" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content={desc} name="description" />
        <title>{title}</title>
        {styles}
      </head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: children }} id="page-view" />
      </body>
    </html>
  );
};

export default Html;
