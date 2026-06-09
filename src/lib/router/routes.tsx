// ==============================================
// Route Configuration
// All routes are defined here in one place.
// Add new routes by adding objects to the array below.
//
// Protected routes use the ProtectedRoute wrapper (see below).
// ==============================================

import type { RouteObject } from 'react-router-dom';
import { ExamplePage } from '@/pages/ExamplePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { Layout } from '@/components/Layout';

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ExamplePage />,
      },
      // Example protected route:
      // {
      //   path: '/dashboard',
      //   element: (
      //     <ProtectedRoute>
      //       <DashboardPage />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
