import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { TimeSeriesPage as HomePage } from '../pages/TimeSeriesPage';
import { HomePageRouteErrorBoundary } from '../components/HomePageRouteErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <HomePageRouteErrorBoundary />,
  },
]);
