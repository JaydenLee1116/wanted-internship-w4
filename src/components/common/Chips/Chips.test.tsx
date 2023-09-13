import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Chips } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme.styled';

describe('Chips', () => {
  it('should render Chips component', () => {
    const { chips } = setup();

    expect(chips).toBeInTheDocument();
  });
});

describe('Chip', () => {
  it('should render Chip component', () => {
    const { chipList } = setup();
    const firstChip = chipList[0];

    expect(firstChip).toBeInTheDocument();
  });

  it('should render Chip components as many as the number of data', () => {
    const { chipList } = setup();

    expect(chipList.length).toBe(mockData.length);
  });

  it('should event handler be called when click Chip component', () => {
    const { chipList } = setup();
    const firstChip = chipList[0];
    const mockOnClick = jest.fn();
    firstChip.onclick = mockOnClick;
    userEvent.click(firstChip);

    expect(mockOnClick).toHaveBeenCalled();
  });
});

const setup = () => {
  const { container } = render(
    <Chips>
      {mockData.map(data => (
        <Chips.Chip key={data.id}>{data.name}</Chips.Chip>
      ))}
    </Chips>,
    {
      wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    },
  );

  const chips = container.querySelector('section');
  const chipList = screen.getAllByRole('button');

  return {
    chips,
    chipList,
  };
};

const mockData = [
  {
    id: '0',
    name: 'test-0',
  },
  {
    id: '1',
    name: 'test-1',
  },
];
