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
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const ErrorPath = styled.code`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.red};
`;

export const NavigateTime = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.red};
`;
