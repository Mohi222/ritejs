const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de']
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  reactStrictMode: true,
})
