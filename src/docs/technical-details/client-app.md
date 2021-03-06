﻿# Client App

_Note: You must be in `src/Intranet.Web/Intranet.Web` to use the npm scripts._

## Lint

The client app can be linted by running:

```
> npm run lint
```

Some linting issues can be fixed automatically by `tslint`:

```
> npm run lint:fix
```

## Unit Testing

Karma is used for unit testing.

Run the unit tests with:

```
> npm test
```

## First time setup

Before the Angular app runs the first time the bundles must be built with Webpack. After installing all dependencies the app will be built automatically:

```
> npm install
```
