// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./modules/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./renderer/**/*.{vue,js,ts,jsx,tsx}",
  ],
  corePlugins: { preflight: false },
  plugins: [],
  theme: {
    extend: {},
  },
};
