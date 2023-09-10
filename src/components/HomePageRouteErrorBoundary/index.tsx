import React, { useEffect } from 'react';
import { isRouteErrorResponse, useLocation, useNavigate, useRouteError } from 'react-router-dom';

import { TIME_TO_NAVIGATE_HOME_PAGE } from '../../constants';
import * as S from './HomePageRouteErrorBoundary.styled';

export const HomePageRouteErrorBoundary = () => {
  const { pathname } = useLocation();
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      setTimeout(() => {
        navigate('/');
      }, TIME_TO_NAVIGATE_HOME_PAGE);
    }
  }, []);

  if (isRouteErrorResponse(error)) {
    return (
      <section>
        <S.Title>잘못된 경로입니다.</S.Title>
        <S.Description>
          <S.ErrorPath>{pathname}</S.ErrorPath> 은 존재하지 않는 경로입니다.
        </S.Description>
        <S.Description>
          <S.NavigateTime>3초</S.NavigateTime> 후 메인 페이지로 이동합니다.
        </S.Description>
      </section>
    );
  }

  return null;
};
