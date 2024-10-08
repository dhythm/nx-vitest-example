# Nx + Vitest Example

## Create the repository environment

```sh
npx create-nx-workspace@17.2.8 --pm yarn

✔ Where would you like to create your workspace? · nx-vitest-example
✔ Which stack do you want to use? · react
✔ What framework would you like to use? · none
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · something
✔ Which bundler would you like to use? · vite
✔ Test runner to use for end to end (E2E) tests · playwright
✔ Default stylesheet format · css
✔ Enable distributed caching to make your CI faster · No
```

```sh
yarn add -D vite@^5.4.0
yarn add -D vitest@latest @vitest/ui@latest @vitest/coverage-v8@latest @vitest/browser
```

## Create a new lib

```sh
yarn nx generate library foo

✔ Which generator would you like to use? · @nx/react:library
✔ What unit test runner should be used? · vitest
✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · vite
```

```sh
yarn nx generate library bar

✔ Which generator would you like to use? · @nx/js:library
✔ Which unit test runner would you like to use? · vitest
✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · tsc
```

## Run vitest test

```sh
yarn nx run foo:test
yarn nx run bar:test
```
