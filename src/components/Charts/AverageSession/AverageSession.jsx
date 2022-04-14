/* eslint-disable react/prop-types */
import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './averageSession.css';

const sessions = [
  {
    day: 1,
    sessionLength: 30,
  },
  {
    day: 2,
    sessionLength: 23,
  },
  {
    day: 3,
    sessionLength: 45,
  },
  {
    day: 4,
    sessionLength: 50,
  },
  {
    day: 5,
    sessionLength: 0,
  },
  {
    day: 6,
    sessionLength: 0,
  },
  {
    day: 7,
    sessionLength: 60,
  },
];

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="line-tooltip">
        <p className="tooltipLabel">{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
}

function AverageSession() {
  const formatedDays = (days) => {
    switch (days) {
      case 1:
        return 'L';
      case 2:
        return 'M';
      case 3:
        return 'M';
      case 4:
        return 'J';
      case 5:
        return 'V';
      case 6:
        return 'S';
      case 7:
        return 'D';

      default:
        return days;
    }
  };
  return (
    <div className="line-chart">
      <p>Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sessions}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickFormatter={formatedDays}
            tick={{ fill: 'white' }}
          />
          <YAxis
            type="number"
            domain={['dataMin -5', 'dataMax +5']}
            dataKey="sessionLength"
            hide
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSession;
