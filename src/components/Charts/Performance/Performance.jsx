import React from 'react';
// eslint-disable-next-line object-curly-newline
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import './performance.css';

function Performance() {
  const performance = [
    {
      userId: 12,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity',
      },
      data: [
        {
          value: 80,
          kind: 1,
        },
        {
          value: 120,
          kind: 2,
        },
        {
          value: 140,
          kind: 3,
        },
        {
          value: 50,
          kind: 4,
        },
        {
          value: 200,
          kind: 5,
        },
        {
          value: 90,
          kind: 6,
        },
      ],
    },
  ];

  const performanceData = performance[0].data;

  const formatedLabel = (label) => {
    switch (label) {
      case 1:
        return 'Cardio';
      case 2:
        return 'Energie';
      case 3:
        return 'Endurance';
      case 4:
        return 'Force';
      case 5:
        return 'Vitesse';
      case 6:
        return 'Intensité';

      default:
        return label;
    }
  };

  return (
    <div className="radar-chart">
      <ResponsiveContainer className="test" width="100%" height="100%">
        <RadarChart
          outerRadius="70%"
          data={performanceData}
          startAngle="30"
          endAngle="-330"
        >
          <PolarGrid radialLines={false} stroke="white" />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: 'white', fontSize: '12px' }}
            tickFormatter={formatedLabel}
          />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;
