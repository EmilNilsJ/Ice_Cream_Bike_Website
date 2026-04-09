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

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the example env file and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

3. Generate the Prisma client:
   ```bash
   npm run prisma:generate
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The app runs at `http://localhost:3000`.

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
