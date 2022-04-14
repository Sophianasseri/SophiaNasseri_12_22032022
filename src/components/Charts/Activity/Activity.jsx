import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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
function Activity() {
  const activityData = activity[0].sessions;
  return (
    <div className="bar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={activityData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            orientation="right"
            domain={['dataMin -1', 'dataMax +1']}
          />
          <YAxis
            hide
            yAxisId="calories"
            dataKey="calories"
            domain={['dataMin -10', 'dataMax +10']}
          />
          <Tooltip />
          <Bar
            barSize={8}
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282d30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            barSize={8}
            yAxisId="calories"
            dataKey="calories"
            fill="#ff0101"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activity;
