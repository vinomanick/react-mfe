import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { generateRouter } from './router';

export const mountReactApp = ({
  element,
  options = { basename: '' },
}: {
  element: HTMLElement;
  options?: { basename: string };
}) => {
  const { basename } = options;
  localStorage.setItem('basename', basename);

  const root = ReactDOM.createRoot(element || document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={generateRouter({ basename })} />
    </React.StrictMode>,
  );
  return root;
};
