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
├── components/           # Shared UI components
│   └── ExampleComponent/ # Template: ComponentName.tsx + .module.scss + index.ts
├── pages/                # Page components (one per route)
│   └── ExamplePage/      # Template: PageName.tsx + .module.scss + index.ts
├── hooks/                # Custom hooks
│   └── useExampleCounter.ts
├── lib/                  # Core infrastructure (axios, query client, store, router)
├── types/                # TypeScript types
│   └── example.ts
├── utils/                # Pure utility functions (no React, no side effects)
│   └── exampleFormatPrice.ts
├── styles/               # Global styles
│   ├── variables.scss    # Design tokens (colors, spacing, typography, breakpoints)
│   ├── reset.scss        # CSS reset for cross-browser consistency
│   └── global.scss       # Entry point — imported once in main.tsx
├── App.tsx               # Root component (providers + router)
└── main.tsx              # App entry point
```

### Where does my code go?

| I need to... | Put it in |
|-------------|-----------|
| Create a UI component (Button, Modal, Card) | `src/components/` |
| Add a new page/route | `src/pages/` |
| Write a custom hook | `src/hooks/` |
| Define types | `src/types/` |
| Write a pure utility function | `src/utils/` |
| Configure axios, query client, store | `src/lib/` |

### Import Rules

```tsx
// Use path alias — GOOD
import { ExampleComponent } from '@/components/ExampleComponent';
import { useExampleCounter } from '@/hooks/useExampleCounter';

// Relative imports — BAD
import { ExampleComponent } from '../../components/ExampleComponent';
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

## Routing

Routes are defined in `src/lib/router/routes.tsx`. The app uses React Router v7 with `createBrowserRouter`.

### Adding a new page

1. Create page in `src/pages/MyPage/MyPage.tsx`
2. Add route to `src/lib/router/routes.tsx`:

```tsx
{
  path: '/my-page',
  element: <MyPage />,
}
```

### Protected routes

Wrap any route that requires authentication:

```tsx
import { ProtectedRoute } from '@/lib/router';

{
  path: '/dashboard',
  element: (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  ),
}
```

The `ProtectedRoute` component checks if user is authenticated. If not — redirects to home. Replace the `isAuthenticated` check in `src/lib/router/ProtectedRoute.tsx` with your real auth logic.

### Layout

All pages share a common Layout (`src/components/Layout/`) with header and main content area. The `<Outlet />` renders the active page.

## State Management (Zustand)

Zustand handles **client state** — UI toggles, filters, modals, local preferences.  
For **server state** (API data) use TanStack Query hooks.

Store is defined in `src/lib/store/`. Use directly in any component — no Provider needed.

```tsx
import { useExampleStore } from '@/lib/store/exampleStore';

const MyComponent = () => {
  const { count, increment, isModalOpen, openModal } = useExampleStore();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={openModal}>Open</button>
    </div>
  );
};
```

## API Layer (Axios + TanStack Query)

### Axios Instance

Configured in `src/lib/api/apiClient.ts`. All API calls go through this instance.

- Base URL set once
- Request interceptor — attach auth token (TODO: implement)
- Response interceptor — global error handling (TODO: implement)

```tsx
import { apiClient } from '@/lib/api';

// GET
const response = await apiClient.get('/tours');

// POST
const response = await apiClient.post('/bookings', { tourId: '123' });
```

### TanStack Query

Handles caching, loading states, and refetching automatically.

**Creating a query hook:**

```tsx
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';

export const useExampleQuery = () => {
  return useQuery({
    queryKey: ['example-users'],       // unique cache key
    queryFn: async () => {             // fetch function
      const response = await apiClient.get('/users');
      return response.data;
    },
  });
};
```

**Using in a component:**

```tsx
const { data, isLoading, error } = useExampleQuery();

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error!</p>;
return <div>{data.name}</div>;
```

**Creating a mutation hook (POST/PUT/DELETE):**

```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';

export const useExampleCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newUser: { name: string; email: string }) => {
      const response = await apiClient.post('/users', newUser);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate cache — triggers automatic refetch of the list
      queryClient.invalidateQueries({ queryKey: ['example-users'] });
    },
  });
};
```

**Using mutation in a component:**

```tsx
const { mutate, isPending } = useExampleCreate();

<button onClick={() => mutate({ name: 'John', email: 'john@test.com' })} disabled={isPending}>
  {isPending ? 'Saving...' : 'Create User'}
</button>
```

## Forms (React Hook Form + Zod)

Forms use React Hook Form for state management and Zod for validation. See `src/components/ExampleForm/` for a working example.

**Pattern:**

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. Define schema (validation + types in one place)
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
});

// 2. Get type from schema
type FormData = z.infer<typeof schema>;

// 3. Use in component
const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema),
});

// 4. Register inputs
<input {...register('name')} />
{errors.name && <span>{errors.name.message}</span>}
```

## Path Aliases

Use `@/` instead of relative paths:

```tsx
// Good
import { ExampleComponent } from '@/components/ExampleComponent';

// Bad
import { ExampleComponent } from '../../../components/ExampleComponent';
```
