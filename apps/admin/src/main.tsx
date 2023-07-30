import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { generateRouter } from './router';
import './index.css';

export const mountApp = (element: HTMLElement, options = { basename: '' }) => {
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
