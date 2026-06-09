import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/lib/router';

// createBrowserRouter — creates the router instance from route config
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
