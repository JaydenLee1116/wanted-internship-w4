import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ChartPage as HomePage } from '../pages/ChartPage';
import { ErrorPage } from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
