<h1 align="center"><b>Rite</b></h1>
<p align='center'>
  Opinionated <a href="https://nextjs.org">Nextjs</a> </a> Starter Template
  <br />
  Inspired by <a href="https://github.com/antfu/vitesse">Vitesse</a>
</p>

---

## Features

- [x] Everything for being _Speed_: [React](https://github.com/facebook/react), [Nextjs](https://nextjs.org), [pnpm](https://pnpm.js.org/)
- [x] [File system based routing](https://nextjs.org/docs/routing/introduction)
- [x] [Bearable state management](https://github.com/pmndrs/zustand)
- [x] [Supabase](https://supabase.com)
- [x] [Layout system](./layouts)
- [x] [Zero-config PWA](https://github.com/shadowwalker/next-pwa)
- [x] [Tailwnd CSS 3](https://github.com/tailwindlabs/tailwindcss)
- [x] [Mantine](https://mantine.dev/)
- [x] [any icon from anywhere](https://github.com/antfu/unplugin-icons)
- [x] [Easily use SVGs](https://react-svgr.com)
- [ ] [Storybook](https://storybook.js.org/)
- [ ] Hooks: [React Use](https://github.com/streamich/react-use) and [SWR](https://swr.vercel.app/)
- [ ] i18n
- [x] [Markdown Support](https://nextjs.org/docs/advanced-features/using-mdx#nextmdx)
- [x] [On-demend Api importing](https://github.com/antfu/unplugin-auto-import)
- [ ] [Testing](https://testing-library.com/)
- [ ] [E2E Testing](https://cypress.io/)
- [ ] [Standards checking with Husky](https://github.com/typicode/husky)
- [ ] [Github Actions](https://github.com/features/actions)
- [ ] [TypeScript](https://www.typescriptlang.org/), because it's the _right_ way to do _Rite_
- [ ] Deploy on Vercel

## Comes with

### UI Frameworks

- [Tailwind CSS 3](https://github.com/tailwindlabs/tailwindcss) - A utility-first CSS framework for rapid UI development.
- [Mantine](https://github.com/mantinedev/mantine) - eact components library with native dark theme support

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as Vue components

### Plugins

- React Router
- Zustand

### Coding style

- ESLint with eslint-config-canonical
- [Markdownlint](https://github.com/DavidAnson/markdownlint)
- Prettier
- Stylelint

### Path aliases

- Alias @ to <rootDir>
- Alias ~ to <rootDir>/src a.k.a. <srcDir>

### Dev tools

- TypeScript
- Cypress
- pnpm
- Recomended VS Code Extentions

## Usage

### Development

Just run and visit http://localhost:3000

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

Go to [Vercel](https://vercel.com/new) and select your git repository, `OK` along the way, and your App will be live in a minute.

## Why

When one of my friends said _If a good strongly opinionated template existed for react, i'll use react_ it gave me the motivation to create Rite.
