# Ice Cream Bike Website

Booking and quoting platform for an Italian ice cream catering business. Built with Next.js 15, TypeScript, Prisma, Stripe, and Resend.

## Stack

- **Framework** - Next.js 15 (App Router)
- **Language** - TypeScript
- **Styling** - Tailwind CSS v4
- **Database** - PostgreSQL via Prisma
- **Payments** - Stripe
- **Email** - Resend
- **Animations** - Framer Motion, GSAP

## Getting Started

1. Copy the example env file and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

2. Start the dev server - the script handles installing dependencies and generating the Prisma client automatically if `node_modules` is missing:
   ```powershell
   .\start.ps1
   ```

   Or manually:
   ```powershell
   npm install
   npm run prisma:generate
   npm run dev
   ```

The app runs at `http://localhost:3000`.

You can delete `node_modules` at any time to free disk space. Run `.\start.ps1` again to reinstall.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | Run linter |
| `npm run prisma:generate` | Generate Prisma client |

## Project Structure

```
src/
  app/        # Routes, pages, API handlers
  components/ # Reusable UI components
  lib/        # Business logic, pricing, validation, content
prisma/       # Database schema
```
