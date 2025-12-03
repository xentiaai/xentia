# Xentia — Full platform (Complete)

This repository is a starter platform for selling AI agents to businesses.
It includes:
- Next.js (App Router) frontend: landing, client dashboard, admin
- Demo chat widget and embeddable script
- API routes: LLM proxy (server-side), agents CRUD, Stripe checkout & webhook
- Prisma schema and DB helper (Postgres)
- Dockerfile, GitHub Actions CI, and helpful scripts

## Quick start (local)
1. Copy `.env.example` to `.env.local` and fill your keys.
2. `npm install`
3. `npx prisma migrate dev --name init` (if using Postgres)
4. `npm run dev`

## Deploy
- Recommended: Vercel or Render (supports Next.js serverless functions)
- For Netlify, consider using the Next plugin or export static build (some features require server)

## Folder structure
- `app/` — Next.js app routes and pages
- `pages/api/` — API routes (server-side)
- `components/` — UI components
- `lib/` — helpers (db, llm, rag)
- `prisma/` — schema
