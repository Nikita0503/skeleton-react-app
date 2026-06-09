// ==============================================
// TanStack Query Client
// Configured once here, provided to the entire app via QueryClientProvider.
//
// Default settings:
// - staleTime: 5 min — data is considered fresh for 5 minutes (no refetch)
// - retry: 1 — retry failed requests once
// - refetchOnWindowFocus: false — don't refetch when user switches tabs
// ==============================================

import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
