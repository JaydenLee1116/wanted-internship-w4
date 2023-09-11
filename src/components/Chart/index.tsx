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
} from 'recharts';
import { useTheme } from 'styled-components';

import { Datum } from '../../types';

interface ChartProps {
  data?: Datum[];
}

export const Chart = ({ data }: ChartProps) => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="80%" height="80%">
      <ComposedChart width={1200} height={640} data={data}>
        <CartesianGrid stroke={theme.colors.darkGray} strokeDasharray="5" />
        <XAxis dataKey="time" stroke={theme.colors.black} interval={5} />
        <YAxis
          yAxisId="right"
          dataKey="value_bar"
          orientation="right"
          stroke={theme.colors.sub.primary}
        />
        <Bar
          yAxisId="right"
          type="monotone"
          dataKey="value_bar"
          stroke={theme.colors.sub.primary}
          fill={theme.colors.sub.secondary}
        />
        <YAxis
          yAxisId="left"
          dataKey="value_area"
          orientation="left"
          domain={[0, 200]}
          stroke={theme.colors.main.primary}
        />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="value_area"
          stroke={theme.colors.main.primary}
          fill={theme.colors.main.secondary}
        />
        <Tooltip />
        <Legend />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
