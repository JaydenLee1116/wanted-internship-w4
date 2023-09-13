import React from 'react';
import {
  ComposedChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
  Legend,
  Rectangle,
  RectangleProps,
} from 'recharts';
import { useTheme } from 'styled-components';

import { Datum } from '../../types';
import {
  GRID_STROKE_DASH_ARRAY,
  X_AXIS_INTERVAL,
  Y_AXIS_ID_LEFT,
  Y_AXIS_ID_RIGHT,
} from '../../constants';
import * as S from './Chart.styled';

interface ChartProps {
  data?: Datum[];
  selectedGuId: string;
  onClick: (guId: string) => void;
}

export const Chart = ({ data, selectedGuId, onClick }: ChartProps) => {
  const theme = useTheme();
  return (
    <>
      <S.Title>{selectedGuId}</S.Title>
      <ResponsiveContainer width="80%" height="80%">
        <ComposedChart width={1200} height={640} data={data} title={selectedGuId}>
          <CartesianGrid stroke={theme.colors.darkGray} strokeDasharray={GRID_STROKE_DASH_ARRAY} />
          <XAxis dataKey="time" stroke={theme.colors.black} interval={X_AXIS_INTERVAL} />
          <YAxis
            yAxisId={Y_AXIS_ID_RIGHT}
            dataKey="value_bar"
            orientation="right"
            stroke={theme.colors.sub.primary}
          />
          <Bar
            yAxisId={Y_AXIS_ID_RIGHT}
            type="monotone"
            dataKey="value_bar"
            stroke={theme.colors.sub.primary}
            fill={theme.colors.sub.secondary}
            shape={(props: RectangleProps) => {
              const { id } = props;
              return (
                <Rectangle
                  {...props}
                  fill={id === selectedGuId ? theme.colors.red : theme.colors.sub.secondary}
                  onClick={() => {
                    if (!id) return;
                    onClick(id);
                  }}
                />
              );
            }}
          />
          <YAxis
            yAxisId={Y_AXIS_ID_LEFT}
            dataKey="value_area"
            orientation="left"
            domain={[0, 200]}
            stroke={theme.colors.main.primary}
          />
          <Area
            yAxisId={Y_AXIS_ID_LEFT}
            type="monotone"
            dataKey="value_area"
            stroke={theme.colors.main.primary}
            fill={theme.colors.main.secondary}
          />
          <Tooltip />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};
