import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TIME_TO_NAVIGATE_HOME_PAGE } from '../../constants';
import * as S from './ErrorPage.styled';

export const ErrorPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, TIME_TO_NAVIGATE_HOME_PAGE);
  }, []);

  return (
    <S.Container>
      <S.Title>잘못된 경로입니다.</S.Title>
      <S.Description>
        <S.ErrorPath>{pathname}</S.ErrorPath> 는 존재하지 않는 경로입니다.
      </S.Description>
      <S.Description>
        <S.NavigateTime>3초</S.NavigateTime> 후 메인 페이지로 이동합니다.
      </S.Description>
    </S.Container>
  );

  return null;
};
