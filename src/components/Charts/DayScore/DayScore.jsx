/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';
import CustomLabel from './CustomLabel';
import './dayScore.css';

/**
 * Component for rendering user's daily score in a pie chart
 * @component
 * @example
 * const data = userData.todayScore
 * return (
 *  <DayScore data={data} />
 * )
 */
function DayScore({ data }) {
  const pieData = [
    { name: 'Score', value: data },
    { name: 'Total', value: 1 - data },
  ];

  return (
    <div className="pie-chart">
      <p>Score</p>
      <ResponsiveContainer width="99%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            dataKey="value"
            innerRadius={75}
            outerRadius={90}
            cornerRadius="50%"
            startAngle={90}
            endAngle={450}
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
  /**
   * User's daily score
   */
  data: PropTypes.number.isRequired,
};
