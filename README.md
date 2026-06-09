# Travel Agency UI

## Tech Stack

| Category | Library | Purpose |
|----------|---------|---------|
| Build | Vite | Fast dev server, HMR, production bundling |
| Styling | SCSS Modules | Scoped styles per component + SCSS variables/mixins |
| State (client) | Zustand | Lightweight global state (UI state, filters) |
| State (server) | TanStack Query v5 | API data caching, loading/error states, refetching |
| Routing | React Router v7 | SPA page navigation, protected routes |
| Forms | React Hook Form + Zod | Performant forms with schema-based validation |
| HTTP | Axios | API calls with interceptors for auth/error handling |
| UI Primitives | Radix UI | Accessible headless components (Dialog, Select) |
| Date Picker | react-day-picker | Calendar component for date selection |
| Toasts | Sonner | Success/error notification popups |
| Testing | Vitest + React Testing Library | Unit and component testing |
| Code Quality | ESLint + Prettier + Husky | Linting, formatting, pre-commit checks |

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (http://localhost:5173) |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without changes |

## Project Structure

```
src/
├── styles/               # Global styles
│   ├── variables.scss    # Design tokens (colors, spacing, typography, breakpoints)
│   ├── reset.scss        # CSS reset for cross-browser consistency
│   └── global.scss       # Entry point — imported once in main.tsx
├── App.tsx               # Root component
├── App.module.scss       # Example SCSS Module usage
└── main.tsx              # App entry point
```

## Styling Guide

### SCSS Modules

Every component gets its own `.module.scss` file. Classes are locally scoped — no naming collisions.

```tsx
// Component file
import styles from './Button.module.scss';

<button className={styles.primary}>Click</button>
```

```scss
// Button.module.scss
@use '@/styles/variables' as *;

.primary {
  background: $color-primary;
  border-radius: $radius-md;
  padding: $spacing-sm $spacing-md;
}
```

### Design Tokens

All reusable values live in `src/styles/variables.scss`. Import in any module:

```scss
@use '@/styles/variables' as *;
```

Available tokens: `$color-*`, `$font-size-*`, `$spacing-*`, `$radius-*`, `$shadow-*`, `$breakpoint-*`.

## Path Aliases

Use `@/` instead of relative paths:

```tsx
// Good
import { Button } from '@/components/Button';

// Bad
import { Button } from '../../../components/Button';
```
