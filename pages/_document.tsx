/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { ServerStyles,
  createStylesServer } from '@mantine/next';
import type { DocumentContext } from 'next/document';
import Document from 'next/document';

const stylesServer = createStylesServer();

export default class _Document extends Document {
  static async getInitialProps (context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context);

    // Add your app specific logic here

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} />
        </>
      ),
    };
  }
}
