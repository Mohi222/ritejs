import path from "path";
import { UserConfig } from "vite";

import ssr from "vite-plugin-ssr/plugin";
import react from "@vitejs/plugin-react";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import AutoImport from "unplugin-auto-import/vite";
import svgrPlugin from "vite-plugin-svgr";
import mdx from "vite-plugin-mdx";

const config: UserConfig = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./modules"),
    },
  },
  plugins: [
    react(),
    ssr(),
    AutoImport({
      imports: [
        "react",
        {
          // Commonly used mantine components
          "@mantine/core": [
            "Button",
            "ActionIcon",
            "Card",
            "Container",
            "Group",
            "Grid",
            "Select",
            "SimpleGrid",
            "Text",
            "Title",
            "TextInput",
          ],
        },
      ],
      resolvers: [
        IconsResolver({
          prefix: "Icon",
          extension: "jsx",
        }),
      ],
    }),
    Icons({
      compiler: "jsx",
      jsx: "react",
      autoInstall: true,
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,

        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    mdx({}),
  ],
};

export default config;
