import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { generateRouter } from './router';
import './index.css';

const addStylesToHost = (baseURL: string) => {
  const id = 'admin-style';
  const link = document.createElement('link');
  link.href = `${baseURL}style.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.id = id;
  const target = document.head;
  if (!target.querySelector(`#${id}`)) {
    target.appendChild(link);
  }
};

export const mountApp = (element: HTMLElement, options = { basename: '' }) => {
  const { basename } = options;
  localStorage.setItem('basename', basename);

  if (!import.meta.env.DEV) {
    addStylesToHost(import.meta.env.BASE_URL);
  }

  const root = ReactDOM.createRoot(element || document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={generateRouter({ basename })} />
    </React.StrictMode>,
  );
  return root;
};
