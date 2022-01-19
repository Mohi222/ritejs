const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const IconsResolver = require("unplugin-icons/resolver");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withPWA(
  withMDX({
    i18n: {
      defaultLocale: "en",
      locales: ["en", "de"],
    },

    webpack(config) {
      // unplugin-auto-import
      config.plugins.push(
        require("unplugin-auto-import/webpack")({
          include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          ],
          // Generate corresponding .eslintrc-auto-import.json file.
          // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
          eslintrc: {
            enabled: true, // Default `false`
            filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
            globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
          },
          imports: [
            // presets
            'react'
          ],
          resolvers: [
            IconsResolver({
              prefix: "Icon",
              extension: "jsx",
            }),
          ],
        })
      );

      // unplugin-icons
      config.plugins.push(
        require("unplugin-icons/webpack")({
          compiler: "jsx",
          jsx: "react",
          autoInstall: true,
        })
      );

      // SVGR
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });

      return config;
    },
    pwa: {
      dest: "public",
      // https://github.com/GoogleChrome/workbox/issues/1790
      disable: process.env.NODE_ENV === "development",
      runtimeCaching,
    },
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  })
);
