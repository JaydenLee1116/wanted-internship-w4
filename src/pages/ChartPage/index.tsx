import React, { useState } from 'react';

import { useGetData } from '../../services/useGetData';
import { getDeduplicatedArray } from '../../utils/getDeduplicatedArray';
import { Chips } from '../../components/common/Chips';
import { Chart } from '../../components/Chart';
import { COPYRIGHT, TOTAL_ID } from '../../constants';
import * as S from './ChartPage.styled';

export const ChartPage = () => {
  const { data } = useGetData();
  const guIds = getDeduplicatedArray(data ? [TOTAL_ID, ...data.map(v => v.id)] : [TOTAL_ID]);
  const [selectedGuId, setSelectedGuId] = useState(guIds[0]);
  const handleClickForFilter = (guId: string) => {
    setSelectedGuId(guId);
  };

  return (
    <>
      {data && (
        <S.Container>
          <S.Header>
            <Chips>
              {guIds.map(guId => (
                <Chips.Chip
                  key={guId}
                  isClicked={selectedGuId === guId}
                  onClick={() => {
                    handleClickForFilter(guId);
                  }}
                >
                  {guId}
                </Chips.Chip>
              ))}
            </Chips>
          </S.Header>
          <S.Main>
            <Chart data={data} selectedGuId={selectedGuId} onClick={handleClickForFilter} />
          </S.Main>
          <S.Footer>{COPYRIGHT}</S.Footer>
        </S.Container>
      )}
    </>
  );
};
