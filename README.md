# Turborepo starter

This is an official TS starter Turborepo.

## Using this example

You can clone this repo using :

```
git clone https://github.com/fouks5996/turborepo-next-strapi.git
```

Delete 'package-lock.json'

And then run :

```
npm install
```

You must create a local mysql database and plug it into "./apps/cms/config/database.ts"

You must create a .env file on each app inside './apps' :

- `web` .env : NEXT_PUBLIC_STRAPI_TOKEN=generated directly inside Strapi GUI.
- `cms` .env : All your database sql config :
  DATABASE_CLIENT=
  DATABASE_HOST=
  DATABASE_PORT=
  DATABASE_NAME=
  DATABASE_USERNAME=
  DATABASE_PASSWORD=
  DATABASE_SSL=false
  DATABASE_CHARSET=utf8mb4  
   JWT_SECRET=

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `cms`: a [Strapi](https://strapi.io/) app
- `ui`: a stub React component library shared by both `web` and others applications
- `utils`: a bundle of usefull functions, hooks, types, and state stores.
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```
