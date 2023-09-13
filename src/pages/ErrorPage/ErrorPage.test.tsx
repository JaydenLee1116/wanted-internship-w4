import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ErrorPage } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme.styled';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('ErrorPage', () => {
  it('should render ErrorPage component when user land on a bad page', () => {
    const { errorPage } = setup();

    expect(errorPage).toBeInTheDocument();
  });

  it('should render "잘못된 경로입니다." text when user land on a bad page', () => {
    setup();

    expect(screen.getByText('잘못된 경로입니다.')).toBeInTheDocument();
  });

  it('should call setTimeout once for navigating Home page when user land on a bad page', () => {
    const spySetTimeout = jest.spyOn(window, 'setTimeout');

    setup();

    expect(spySetTimeout).toBeCalledTimes(1);
  });
});

const setup = () => {
  const badRoute = '/bad/route';
  const { container } = render(<ErrorPage />, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[badRoute]}>
          <Routes>
            <Route path="/" element={<div />} />
            <Route path="*" element={children} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    ),
  });

  const errorPage = container.querySelector('section');

  return {
    errorPage,
  };
};
