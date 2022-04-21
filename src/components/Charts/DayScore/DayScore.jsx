/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';
import CustomLabel from './CustomLabel';
import './dayScore.css';

function DayScore({ data }) {
  const pieData = [
    { name: 'Score', value: data },
    { name: 'Total', value: 1 - data },
  ];

  return (
    <div className="pie-chart">
      <p>Score</p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            dataKey="value"
            innerRadius={75}
            outerRadius={90}
            cornerRadius="50%"
            startAngle={130}
            endAngle={-160}
          >
            {pieData.map((entry, index) => {
              if (index === 1) {
                return <Cell key={`cell-${entry}`} fill="none" stroke="none" />;
              }

              return (
                <Cell key={`cell-${entry}`} fill="#ff0101" stroke="none" />
              );
            })}

            <Label
              content={<CustomLabel score={pieData[0].value * 100} />}
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DayScore;

DayScore.propTypes = {
  data: PropTypes.number.isRequired,
};
