# AGENTS — Project Guide for AI Coding Agents

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict mode)
- **Package Manager:** pnpm
- **Linting:** ESLint 9 (flat config)
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/          # Next.js App Router pages & layouts
└── components/   # Reusable UI components
```

## Conventions

### Imports
- Use the `@/` path alias for all project imports (maps to `./src/`).
- Example: `import { Button } from "@/components/Button"`

### Components
- File names: PascalCase (`Button.tsx`, `ThemeToggle.tsx`).
- Components are **Server Components** by default (no `"use client"` unless interactivity is needed).
- Client Components add `"use client"` at the top.

### Styling
- Use Tailwind utility classes only — no CSS modules or styled-components.
- Global styles go in `src/app/globals.css`.

### Linting & Building
- Always run `pnpm lint` after making changes.
- Run `pnpm build` to verify the project compiles.

## Writing Code

- Do **not** add comments unless the existing code style uses them.
- Follow existing patterns for imports, exports, types, and naming.
- Keep components small and focused. Extract reusable logic into helpers.

## Commands

| Command        | Action                    |
| -------------- | ------------------------- |
| `pnpm dev`     | Start dev server          |
| `pnpm build`   | Production build          |
| `pnpm start`   | Start production server   |
| `pnpm lint`    | Run ESLint                |
