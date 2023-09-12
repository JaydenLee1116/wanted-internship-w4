import { styled } from 'styled-components';

export const ChipsContainer = styled.section<{ $width?: string; $height?: string; $gap?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '100%'};
  gap: ${({ $gap }) => $gap || '8px'};
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const ChipWrapper = styled.button<{
  $width?: string;
  $height?: string;
  $isClicked?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => $width || 'fit-content'};
  height: ${({ $height }) => $height || 'fit-content'};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 24px;
  padding: 8px 16px;
  background-color: ${({ theme, $isClicked }) =>
    $isClicked ? theme.colors.blue : theme.colors.lightGray};
  color: ${({ theme, $isClicked }) => ($isClicked ? theme.colors.white : theme.colors.black)};
  cursor: pointer;
`;
