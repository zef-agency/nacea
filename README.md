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

HOST=0.0.0.0
PORT=1337
APP_KEYS=Z0r0jNB+DWYMnJkZLrmSdA==,AnW0YAjUtoIRdGSHy88H/g==,P8Bk15+i5XflssxM5BZMJQ==,UrssxWMuIAJhsJq+WzZaTA==
API_TOKEN_SALT=IoaF9pWst7KpGWOSfDoGKg==
ADMIN_JWT_SECRET=CvNLE2DghU2xcd9K+lcmYQ==
TRANSFER_TOKEN_SALT=lCrKWbZeHfaEVij5KEpipg==

# Database

DATABASE_CLIENT=mysql
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=monorepo_example_2
DATABASE_USERNAME=root
DATABASE_PASSWORD=Groscon59
DATABASE_SSL=false
JWT_SECRET=0K1SuPQvyHs3E29/JSynQA==
DATABASE_CHARSET=utf8mb4

NEXT_PUBLIC_STRAPI_TOKEN="53057fbfdc50f1412c00803f390b230040e477baffac33c19a858c50c11b9b648c5994272c1727f27d65dd1931dd983942eacf2bb048da518d3355955b6b9424392611a449d07b1e450b845424ca6cb2bcbb1aa9f1d998988d5ed0c429e46525b66c4b89b694ba9da77f921fb62f0baf24f6c9afc221d8e38305a4db8c14f69a"
