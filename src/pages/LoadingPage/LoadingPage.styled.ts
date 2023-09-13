import { styled } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 100vw;
  height: 100vh;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const Content = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
