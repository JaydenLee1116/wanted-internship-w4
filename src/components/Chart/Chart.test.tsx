import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Chart } from './';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme.styled';

describe('Chart', () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    Object.defineProperty(global, 'ResizeObserver', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        observe: jest.fn(() => 'Mocking works'),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      })),
    });
  });
  afterEach(() => {
    window.ResizeObserver = ResizeObserver;
    jest.restoreAllMocks();
  });

  it('should render Chart component', () => {
    const { chartContainer } = setup();
    expect(chartContainer).toBeInTheDocument();
  });
});

const setup = () => {
  const { container } = render(
    <Chart
      data={mockData}
      selectedGuId="0"
      onClick={guId => {
        console.log(`This Id is ${guId}`);
      }}
    />,
    {
      wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    },
  );

  const chartContainer = container.querySelector('.recharts-responsive-container');

  return {
    chartContainer,
  };
};

const mockData = [
  {
    id: '0',
    value_area: 10,
    value_bar: 100,
    time: '12:00:00',
  },
  {
    id: '1',
    value_area: 11,
    value_bar: 111,
    time: '12:01:00',
  },
];
