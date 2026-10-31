# Nuxt Base

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

[简体中文](./README-ZH_CN.md)

A starter template built with Nuxt 4, Vue 3, and TypeScript. It includes Tailwind CSS 4, commonly used Nuxt modules, a sample homepage, and a light/dark theme toggle.

## Requirements

- Node.js: `^22.22.3 || ^24.15.0 || >=26.0.0`, matching `engines` in `package.json`.
- pnpm: `11.28.8`, matching `packageManager` in `package.json`.

## Quick start

Create your own repository with GitHub's **Use this template**, clone the new repository, and run these commands in the project directory:

```bash
pnpm install
pnpm dev
```

The development server defaults to `http://localhost:3000`. Check the terminal output for the actual address. Installing dependencies automatically runs `nuxt prepare` and configures Git hooks.

## Included features

| Feature                | Implementation                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Styling                | Tailwind CSS 4 through its Vite plugin                                               |
| Linting and formatting | ESLint, `@nuxt/eslint`, and `@antfu/eslint-config`                                   |
| Pre-commit checks      | `simple-git-hooks` and `nano-staged` run ESLint with automatic fixes on staged files |
| Icons                  | `@nuxt/icon`                                                                         |
| Image processing       | `@nuxt/image`                                                                        |
| State management       | Pinia and `@pinia/nuxt`                                                              |
| Composable utilities   | VueUse and `@vueuse/nuxt`                                                            |
| Light/dark themes      | `@nuxtjs/color-mode`, following the system preference by default                     |
| SEO                    | `@nuxtjs/seo`                                                                        |
| Development tools      | Nuxt DevTools and `@nuxt/hints`                                                      |

## Commands

| Command         | Purpose                                                 |
| --------------- | ------------------------------------------------------- |
| `pnpm dev`      | Start the development server                            |
| `pnpm lint`     | Check code and formatting                               |
| `pnpm lint:fix` | Automatically fix supported ESLint issues               |
| `pnpm build`    | Build for production, using a Node.js server by default |
| `pnpm preview`  | Preview the production build locally                    |
| `pnpm generate` | Prerender and generate a static site                    |

## Project structure

```text
app/
  assets/css/     # Global styles and the Tailwind entry point
  components/    # Shared components
  layouts/       # Page layouts
  lib/           # Utility functions
  pages/         # File-based routes
  plugins/       # Nuxt plugins
  app.vue        # Application entry point
public/          # Static assets
nuxt.config.ts   # Nuxt and module configuration
```

The `components`, `data`, and `validators` directories within `pages` are excluded from page routes. Vue components in those `components` directories are registered automatically.

## After creating a project

1. Update the project name, author, and repository URL in `package.json`.
2. Set `site.url` in `nuxt.config.ts` to your deployment origin, such as `https://example.com`. The current value is the template repository URL and is unsuitable for a production site.
3. Replace the sample homepage, the repository link in the footer, and `public/favicon.ico`.
4. Adjust `routeRules` for your application. Currently, the homepage is prerendered and `/admin/**` uses client-side rendering.
5. Update the discussion link in `.github/ISSUE_TEMPLATE/config.yml` to your new repository, and adapt the Issue templates, PR template, and Release workflow as needed.

Environment files are ignored by Git, except for `.env.example`. When adding environment variables, provide an `.env.example` without secrets for collaborators.

## Build and deploy

### Node.js server

```bash
pnpm build
node .output/server/index.mjs
```

Build in the target deployment environment and deploy the `.output` directory. Image processing uses native dependencies, so the build and runtime platforms and architectures should match.

### Static site

```bash
pnpm generate
```

Deploy `.output/public` to a static hosting provider. Static deployments do not provide Nitro server endpoints. Features that require a server runtime need a server deployment or a separate service.

## License

[MIT](./LICENSE)
