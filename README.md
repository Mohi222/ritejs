# Rite

Opinionated React Starter Template

Inspired by [Vitesse](https://github.com/antfu/vitesse)

## Features

### Sumarry

- [React](https://github.com/facebook/react)
  - [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild)
- [TypeScript](https://www.typescriptlang.org/)
  , because it's the _right_ way to do _Rite_
- Route your way
  - Server and Client Routing
  - File-System Routing
  - Domain-based Routing
- [SSR](https://vite-plugin-ssr.com/)
- Easily manage application states
  - [Bearable store-based state management](https://github.com/pmndrs/zustand)
  - [Minimalist atomic state management](https://github.com/pmndrs/jotai)
- [Supabase](https://supabase.com)
- Make the Design you want
  - [Layout system](./layouts)
  - [Tailwnd CSS 3](https://github.com/tailwindlabs/tailwindcss)
  - [Mantine](https://mantine.dev/)
  - [Sass/SCSS](https://sass-lang.com)
  - [CSS-in-JS](https://mantine.dev/theming/create-styles/)
  - [Any icon from anywhere](https://github.com/antfu/unplugin-icons)
- DX is a must
  - [On-demend importing](https://github.com/antfu/unplugin-auto-import)
  - [Easily use SVGs](https://github.com/pd4d10/vite-plugin-svgr)
  - [Google Fonts support](https://github.com/feat-agency/vite-plugin-webfont-dl)
  - [Markdown Support](https://nextjs.org/docs/advanced-features/using-mdx#nextmdx)
  - [Linting](https://github.com/eslint/eslint)

### Detailed

#### Design

- [Layout system](./layouts)
  | Make pages with different layouts (e.g. one column or two columns, right sidebar or left sidebar) easily
- [Tailwind CSS 3](https://github.com/tailwindlabs/tailwindcss)
  | A utility-first CSS framework for rapid UI development.
- [Mantine](https://github.com/mantinedev/mantine)
  | react components library with native dark theme support
- [Sass/SCSS](https://sass-lang.com) support
- [CSS-in-JS](https://mantine.dev/theming/create-styles/)
  | Like to define your styles in JavaScript?
- Use fonts from Google Fonts, performant & easy with [`vite-plugin-webfont-dl`](https://github.com/feat-agency/vite-plugin-webfont-dl)
- Icon support
  - [Iconify](https://iconify.design)
    | use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
  - [`unplugin-icons`](https://github.com/antfu/unplugin-icons)
    | icons as components

#### Plugins

- [Zustand](https://github.com/pmndrs/zustand)
- [Jotai](https://github.com/pmndrs/jotai)
- [`vite-plugin-mdx`](https://github.com/brillout/vite-plugin-mdx)
- [Supabase](https://supabase.com/)
- [SVGR](https://react-svgr.com/)

#### Coding style

- [ESLint](https://github.com/eslint/eslint)
  with [`eslint-canonical-config`](https://github.com/gajus/eslint-config-canonical)
  and [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)

#### Path aliases

- Alias `@` to `<rootDir>/modules`

#### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [PostCSS](https://postcss.org/) with [autoprefixer](https://github.com/postcss/autoprefixer)
- [pnpm](https://pnpm.js.org)
- [Recomended VS Code Extentions](./.vscode/extensions.json)
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import)
- [`vite-plugin-tips`](https://github.com/yingpengsha/vite-plugin-tips)
- [`vite-plugin-sass-dts`](https://github.com/activeguild/vite-plugin-sass-dts)

## Usage

### Development

Just run and visit <http://localhost:3000>

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

## TODO

- [ ] Add Demo for features
- [ ] [PWA](https://github.com/antfu/vite-plugin-pwa)
- [ ] i18n
- [ ] [Testing](https://testing-library.com/)
- [ ] [E2E Testing](https://cypress.io/)
- [ ] [Standards checking with Husky](https://github.com/typicode/husky)
- [ ] [Storybook](https://storybook.js.org/)
- [ ] [Github Actions](https://github.com/features/actions)

## Why

When one of my friends said
_If a good strongly opinionated template existed for react, i'll use react_
it gave me the motivation to create Rite.
