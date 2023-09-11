import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ChartPage as HomePage } from '../pages/ChartPage';
import { HomePageRouteErrorBoundary } from '../components/HomePageRouteErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <HomePageRouteErrorBoundary />,
  },
]);
