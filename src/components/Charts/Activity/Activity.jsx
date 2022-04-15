/* eslint-disable react/prop-types */
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import './activity.css';

const activity = [
  {
    userId: 12,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240,
      },
      {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220,
      },
      {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280,
      },
      {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290,
      },
      {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160,
      },
      {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162,
      },
      {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390,
      },
    ],
  },
];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="line-tooltip">
        <p className="tooltipLabel">{`${payload[0].value}kg`}</p>
        <p className="tooltipLabel">{`${payload[1].value}kCal`}</p>
      </div>
    );
  }

  return null;
}
const days = ['1', '2', '3', '4', '5', '6', '7'];
function Activity() {
  const activityData = activity[0].sessions;
  return (
    <div className="bar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={activityData}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#DEDEDE"
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickFormatter={(d, i) => days[i]}
            tick={{ fill: '#9B9EAC', fontSize: '14px' }}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            orientation="right"
            domain={['dataMin -1', 'dataMax +1']}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: '14px' }}
            tickCount={4}
          />
          <YAxis
            hide
            yAxisId="calories"
            dataKey="calories"
            domain={['dataMin -10', 'dataMax +10']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            margin={{
              top: 5,
              left: 0,
              right: 5,
              bottom: 5,
            }}
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
          />
          <Bar
            name="Poids(kg)"
            barSize={9}
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282d30"
            radius={[7, 7, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            barSize={9}
            yAxisId="calories"
            dataKey="calories"
            fill="#ff0101"
            radius={[7, 7, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activity;
