import { createBrowserRouter, Outlet } from 'react-router-dom';
import { RootPage } from './pages/root';

export const generateRouter = (options = {}) =>
  createBrowserRouter(
    [
      {
        path: '/',
        element: <RootPage />,
        children: [
          {
            path: '/admin',
            element: <Outlet />,
            children: [
              {
                index: true,
                async lazy() {
                  const { AdminPage } = await import('./pages/admin');
                  return { Component: AdminPage };
                },
              },
              {
                path: 'agents',
                element: <Outlet />,
                children: [
                  {
                    index: true,
                    async lazy() {
                      const { AgentsPage } = await import('./pages/agents');
                      return { Component: AgentsPage };
                    },
                  },
                  {
                    path: 'create',
                    async lazy() {
                      const { AgentsCreatePage } = await import(
                        './pages/agents'
                      );
                      return { Component: AgentsCreatePage };
                    },
                  },
                ],
              },
              {
                path: 'groups',
                async lazy() {
                  const { GroupsPage } = await import('./pages/groups');
                  return { Component: GroupsPage };
                },
              },
            ],
          },
        ],
      },
    ],
    options,
  );
