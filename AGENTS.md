# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js App Router project. Application routes live in `src/app`, including public pages, admin pages, API handlers, and metadata routes such as `sitemap.ts` and `robots.ts`. Reusable UI components live in `src/components`. Shared business logic and content models live in `src/lib`. Database schema and future migrations belong under `prisma/`. Root config files include `package.json`, `tsconfig.json`, `next.config.ts`, and `tailwind.config.ts`.

## Build, Test, and Development Commands
- `npm install`: install project dependencies.
- `npm run dev`: start the local development server at `http://localhost:3000`.
- `npm run build`: create a production build and surface type/runtime integration issues.
- `npm run start`: run the production build locally after `npm run build`.
- `npm run lint`: run Next.js linting.
- `npm run prisma:generate`: generate the Prisma client from `prisma/schema.prisma`.

## Coding Style & Naming Conventions
Use TypeScript with strict typing and 2-space indentation. Prefer functional React components and keep files focused on one responsibility. Use `PascalCase` for component files (`QuoteForm.tsx` style if introduced later), `kebab-case` for route segments in `src/app`, and `camelCase` for variables and functions. Use the `@/` import alias for `src` paths. Keep styling in Tailwind utility classes and shared globals in `src/app/globals.css`.

## Frontend Direction
For public-facing pages, take clear inspiration from the original brand site at `https://theicecreambike.com/`. Favor its simpler editorial structure, warmer hospitality-driven tone, repeated booking calls-to-action, and classic brand presentation over generic SaaS-style landing page patterns. When redesigning the homepage or other marketing pages, prefer founder/storytelling sections, straightforward service highlights, and trust-building content that feels close to the original site while still fitting this codebase.

## Testing Guidelines
No test runner is configured yet. When adding tests, place them near the relevant module or under `src/__tests__`, and use `*.test.ts` or `*.test.tsx` naming. Prioritize coverage for pricing logic in `src/lib/pricing.ts`, validation in `src/lib/validation.ts`, and API route behavior in `src/app/api`. At minimum, run `npm run build` and `npm run lint` before opening a PR.

## Commit & Pull Request Guidelines
There is no existing git history in this workspace, so use clear, imperative commit messages such as `feat: add quote submission flow` or `fix: tighten admin middleware`. Keep commits scoped to one change. PRs should include a short summary, affected routes/components, setup notes for reviewers, and screenshots for UI changes. Link related issues when applicable.

## Security & Configuration Tips
Copy `.env.example` to `.env.local` for local setup. Do not commit secrets. Admin behavior, rate limiting, validation, and security headers are defined in `src/middleware.ts`, `src/lib/security.ts`, and the API routes; preserve those protections when extending forms or admin features.
