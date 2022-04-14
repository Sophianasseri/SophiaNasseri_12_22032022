import React from 'react';
// eslint-disable-next-line object-curly-newline
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';
import CustomLabel from './CustomLabel';
import './dayScore.css';

function DayScore() {
  const mainData = [
    {
      id: 12,
      userInfos: {
        firstName: 'Karl',
        lastName: 'Dovineau',
        age: 31,
      },
      todayScore: 0.12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    },
  ];
  const data = [
    { name: 'Score', value: mainData[0].todayScore },
    { name: 'Total', value: 1 - mainData[0].todayScore },
  ];

  return (
    <div className="pie-chart">
      <p>Score</p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            dataKey="value"
            innerRadius={75}
            outerRadius={90}
            cornerRadius="50%"
            startAngle={130}
            endAngle={-160}
          >
            {data.map((entry, index) => {
              if (index === 1) {
                // eslint-disable-next-line react/no-array-index-key
                return <Cell key={`cell-${index}`} fill="none" stroke="none" />;
              }

              return (
                // eslint-disable-next-line react/no-array-index-key
                <Cell key={`cell-${index}`} fill="#ff0101" stroke="none" />
              );
            })}

            <Label
              content={<CustomLabel score={data[0].value * 100} />}
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DayScore;
