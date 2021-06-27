import React from 'react';
import { ResponsiveContainer, AreaChart, Tooltip, Area } from 'recharts';

export default function Graph({ data }) {
  return (
    <ResponsiveContainer width='100%' height={250}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id='contributions' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#8B31FF' stopOpacity={1} />
            <stop offset='0%' stopColor='#8B31FF' stopOpacity={0.4} />
            <stop offset='100%' stopColor='#8B31FF' stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip contentStyle={{ borderRadius: '.3rem' }} />
        <Area
          type='monotone'
          dataKey='contributions'
          stroke='#8B31FF'
          strokeWidth={2}
          fillOpacity={1}
          fill='url(#contributions)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
