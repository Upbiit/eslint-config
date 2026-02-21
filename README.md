# upbiit-eslint-config

A strict, opinionated ESLint configuration for TypeScript projects with Angular, Jest, Stryker, Cucumber, and Playwright support.

## Features

- ✅ **Strict TypeScript rules** enforced at all times
- ✅ **Prettier integration** for consistent code formatting
- ✅ **Angular 18+** support with component/directive selectors
- ✅ **Jest testing** framework support
- ✅ **Stryker mutation** testing compatibility
- ✅ **Cucumber + Playwright** E2E testing support
- ✅ **Opinionated defaults** based on industry best practices

## Requirements

- ESLint 9.0+
- TypeScript 5.0+
- Node.js 18+

## Installation

```bash
npm install --save-dev \
  upbiit-eslint-config \
  eslint@^9.0.0 \
  typescript@^5.0.0 \
  @typescript-eslint/eslint-plugin@^8.0.0 \
  @typescript-eslint/parser@^8.0.0 \
  @angular-eslint/eslint-plugin@^18.0.0 \
  @angular-eslint/eslint-plugin-template@^18.0.0 \
  eslint-plugin-jest@^28.0.0 \
  eslint-plugin-cucumber@^2.0.0 \
  eslint-config-prettier@^9.0.0 \
  eslint-plugin-prettier@^5.0.0 \
  prettier@^3.0.0