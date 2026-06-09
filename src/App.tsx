import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/query';
import { routes } from '@/lib/router';

const router = createBrowserRouter(routes);

function App() {
  return (
    // QueryClientProvider — makes TanStack Query available in all components
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
