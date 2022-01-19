<h1 align="center"><b>Rite</b></h1>
<p align='center'>
  Opinionated <a href="https://nextjs.org">Nextjs</a> </a> Starter Template
  <br />
  Inspired by <a href="https://github.com/antfu/vitesse">Vitesse</a>
</p>

## Features

- [React](https://github.com/facebook/react), [Nextjs](https://nextjs.org), [pnpm](https://pnpm.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
  , because it's the _right_ way to do _Rite_
- [File system based routing](https://nextjs.org/docs/routing/introduction)
- [Bearable state management](https://github.com/pmndrs/zustand)
- [Supabase](https://supabase.com)
- [Layout system](./layouts)
- [Zero-config PWA](https://github.com/shadowwalker/next-pwa)
- [Tailwnd CSS 3](https://github.com/tailwindlabs/tailwindcss)
- [Mantine](https://mantine.dev/)
- [SCSS](https://sass-lang.com) support
- [CSS-in-JS](https://mantine.dev/theming/create-styles/) support
- [any icon from anywhere](https://github.com/antfu/unplugin-icons)
- [On-demend Api importing](https://github.com/antfu/unplugin-auto-import)
- [Easily use SVGs](https://react-svgr.com)
- [Markdown Support](https://nextjs.org/docs/advanced-features/using-mdx#nextmdx)
- Hooks: [React Use](https://github.com/streamich/react-use) and [SWR](https://swr.vercel.app/)
- [Linting](https://github.com/eslint/eslint)

## Comes with

### UI Frameworks

- [Tailwind CSS 3](https://github.com/tailwindlabs/tailwindcss)
  | A utility-first CSS framework for rapid UI development.
- [Mantine](https://github.com/mantinedev/mantine)
  | react components library with native dark theme support

### Icons

- [Iconify](https://iconify.design)
  | use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons)
  | icons as components

### Plugins

- [Zustand](https://github.com/pmndrs/zustand)
- [`next/mdx`](https://github.com/vercel/next.js/tree/canary/packages/next-mdx)
- [`next-pwa`](https://github.com/shadowwalker/next-pwa)
- [Supabase](https://supabase.com/)
- [SVGR](https://react-svgr.com/)

### Hooks

- [swr](https://swr.vercel.app/)
- [react-use](https://github.com/streamich/react-use)

### Coding style

- [ESLint](https://github.com/eslint/eslint)
  with [`eslint-canonical-config`](https://github.com/gajus/eslint-config-canonical)
  and [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)

### Path aliases

- Alias `@` to `<rootDir>/modules`

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Sass / Scss](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [pnpm](https://pnpm.js.org)
- [Recomended VS Code Extentions](./.vscode/extensions.json)

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

### Deploy on Vercel

Go to [Vercel](https://vercel.com/new)
and select your git repository, `OK` along the way,
and your App will be live in a minute.

## TODO

- [ ] Add module structure
- [ ] Add Demo for features
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
