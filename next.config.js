const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const IconsResolver = require('unplugin-icons/resolver')
module.exports = withPWA({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de']
  },
  webpack(config) {
    // unplugin-auto-import
    config.plugins.push(
      require('unplugin-auto-import/webpack')({
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
            extension: 'jsx'
          })
        ],
        }));

    // unplugin-icons
    config.plugins.push(
      require('unplugin-icons/webpack')({
        compiler: 'jsx',
        jsx: 'react',
        autoInstall: true
      }),
    );

    // SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  pwa: {
    dest: 'public',
    // https://github.com/GoogleChrome/workbox/issues/1790
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
  reactStrictMode: true,
})
