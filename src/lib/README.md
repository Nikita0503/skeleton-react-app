# lib/

Core infrastructure code lives here:

- `api/` — Axios instance, interceptors, API error handling
- `query/` — TanStack Query client configuration
- `store/` — Zustand store(s)
- `router/` — React Router configuration

These are set up once and used everywhere. You rarely need to modify these files.
