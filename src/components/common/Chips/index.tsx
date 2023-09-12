import React from 'react';

import * as S from './Chips.styled';

interface ChipsProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  gap?: string;
}

interface ChipProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  isClicked?: boolean;
  onClick?: () => void;
}

export const Chips = ({ children, width, height, gap }: ChipsProps) => {
  return (
    <S.ChipsContainer $width={width} $height={height} $gap={gap}>
      {children}
    </S.ChipsContainer>
  );
};

const Chip = ({ children, width, height, isClicked, onClick }: ChipProps) => {
  return (
    <S.ChipWrapper $width={width} $height={height} $isClicked={isClicked} onClick={onClick}>
      {children}
    </S.ChipWrapper>
  );
};

Chips.Chip = Chip;
