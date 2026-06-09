// ==============================================
// Protected Route Wrapper
// Wrap any route that requires authentication.
// If user is not logged in — redirects to login page.
//
// Usage in routes.tsx:
//   {
//     path: '/dashboard',
//     element: (
//       <ProtectedRoute>
//         <DashboardPage />
//       </ProtectedRoute>
//     ),
//   }
//
// TODO: Replace the `isAuthenticated` check with your real auth logic.
// ==============================================

import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // TODO: Replace with real auth check (e.g., from Zustand store or context)
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};
