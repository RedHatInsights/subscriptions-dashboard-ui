# CLAUDE.md

## Project Overview

Subscriptions Dashboard is a Red Hat Insights micro-frontend for the subscriptions overview page on `console.redhat.com`. Built with React 18 / TypeScript and loaded into the Insights Chrome shell via Webpack Module Federation (`fec` CLI). The app is small — a single-page dashboard with no routing beyond the top-level `/subscriptions/overview` path.

## Common Commands

- `npm run start` — dev server with hot reload and proxy (requires Red Hat VPN + proxy setup)
- `npm run build` — production build
- `npm run test` — run Jest tests (currently `--passWithNoTests`)
- `npm run lint` — ESLint (flat config, eslint.config.js)
- `npm run verify` — build + lint + test (full CI check)

## Architecture & Conventions

- Functional components only, arrow functions
- PatternFly v6 for UI components; some `pf-u-*` (v5) utility classes remain
- Plain SCSS — custom styles auto-scoped under `.subscriptions-dashboard-ui` / `.subscriptionsDashboardUi` by `fec.config.js`
- No state management library — component-level `useState` only
- No data fetching layer — the dashboard is presentational (static content and links)
- React Router v6 is a shared dependency (provided by Chrome shell, excluded from bundle)
- `useChrome()` from `@redhat-cloud-services/frontend-components` provides auth, navigation, and environment
- App entry: `src/entry.ts` → `src/bootstrap.tsx` → `src/AppEntry.tsx` → `src/App.tsx`
- Module Federation exposes `./RootApp` (see `deploy/frontend.yaml` for full routing config)

## Code Style

Follow the same conventions as the sibling projects (subscription-inventory-ui, subscription-central-ui, cloud-inventory-ui):

- Single quotes, no trailing commas, 100-char print width, semicolons
- ESLint flat config with `sort-imports` (`ignoreDeclarationSort: true`), `react/prop-types: 'off'`, `@typescript-eslint/no-unused-vars: 'error'`

## Testing

- Jest 30 + React Testing Library + jest-environment-jsdom
- No tests exist yet — `npm run test` runs with `--passWithNoTests`
- No coverage thresholds configured
- When adding tests: colocate in `__tests__/` subdirectories next to the code under test
- Test observable behavior (what the user sees and does), not implementation details

## Key Caveats

- App runs inside Red Hat Insights Chrome shell — never test in isolation without the shell context
- Local dev requires Red Hat VPN and proxy setup
- `fec.config.js` configures Webpack/Module Federation
- ESLint enforces sorted imports (`sort-imports` rule with `ignoreDeclarationSort: true`)
- `ts-patch` runs on `postinstall` for `@redhat-cloud-services/tsc-transform-imports`
