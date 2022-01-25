import React from "react";

const Html = ({
  children,
  title,
  desc,
  styles,
}: {
  children: string;
  title: string;
  desc: string;
  styles: JSX.Element;
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={desc} />
        <title>{title}</title>
        {styles}
      </head>
      <body>
        <div id="page-view" dangerouslySetInnerHTML={{ __html: children }} />
      </body>
    </html>
  );
};

export default Html;
