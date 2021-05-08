# Work In Progress

[] Nardi engine
[] Visuals
[] Multiplayer

![unit tests](https://github.com/bezdonas/nardi-webapp/actions/workflows/unit.yml/badge.svg)
![e2e tests](https://github.com/bezdonas/nardi-webapp/actions/workflows/e2e.yml/badge.svg)

# Nardi

App for playing nardi(Long backgammon) online.

- [Demo](https://nardi-webapp.herokuapp.com)
- [Github Actions CI](https://github.com/bezdonas/nardi-webapp/actions)

# Quick start

## Via npm

- `npm i` install dependancies
- `npm run dev` starts dev server
- `npm test` runs tests via jest
- `npm run test:watch` runs tests via jest in watch mode

- `npm run build` build production bundle in `./build`
- `npm start` start prod server
- `npm run e2e` runs e2e tests via cypress on prod build (needs prod server running)

## Via docker

Not containerized yet

# CI/CD

- Github actions run unit tests, builds project and runs e2e tests on build
- Heroku builds project and runs prod server on https://nardi-webapp.herokuapp.com

# Technologies

> ✨ Bootstrapped with Create Snowpack App (CSA).

- [snowpack](https://www.snowpack.dev/) for building project
- [typescript](https://www.typescriptlang.org/) -- superset of javascript with strict typisation -- as programming language
- [prettier](https://prettier.io/) code formatter
- [eslint](https://eslint.org) linter
- [jest](https://jestjs.io/) runs unit tests
- [cypress](https://www.cypress.io/) runs e2e tests
- [babel](https://babeljs.io/) transpiles typescript
- [docker](https://www.docker.com/) containerization
- [serve](https://www.npmjs.com/package/serve) serves prod server
- [husky](https://github.com/typicode/husky) runs pre-commit and pre-push webhooks (with linter and tests)
