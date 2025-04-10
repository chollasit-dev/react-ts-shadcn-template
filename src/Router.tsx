import { createBrowserRouter, RouterProvider } from 'react-router';
import { Home } from '@/pages';
import { Root } from '@/components/layouts';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
