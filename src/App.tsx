import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { queryClient } from '@/lib/query';
import { routes } from '@/lib/router';

const router = createBrowserRouter(routes);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* Toaster — renders toast notifications. Call toast.success() / toast.error() anywhere. */}
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

export default App;
