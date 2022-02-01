import path from 'path';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import type { UserConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import mdx from 'vite-plugin-mdx';
import sassDts from 'vite-plugin-sass-dts';
import ssr from 'vite-plugin-ssr/plugin';
import svgrPlugin from 'vite-plugin-svgr';
import { ViteTips } from 'vite-plugin-tips';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: UserConfig = {
  plugins: [
    react(),
    ssr(),
    AutoImport({
      imports: [
        'react',
        {
          // Commonly used mantine components
          '@mantine/core': [
            'Button',
            'ActionIcon',
            'Card',
            'Container',
            'Group',
            'Grid',
            'Select',
            'SimpleGrid',
            'Text',
            'Title',
            'TextInput',
          ],
        },
      ],
      resolvers: [
        IconsResolver({
          extension: 'jsx',
          prefix: 'Icon',
        }),
      ],
    }),
    Icons({
      autoInstall: true,
      compiler: 'jsx',
      jsx: 'react',
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    mdx({}),
    tsconfigPaths(),
    ViteTips(),
    sassDts(),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Raleway&display=swap',
      'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
    ]),
    eslintPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './modules'),
    },
  },
};

export default config;
